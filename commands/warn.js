const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission for this!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("I can't find this player!");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Du kannst diesen Spieler nicht warnen!");
  let reason = args.slice(1).join(" ") || "None";

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnembed = new Discord.MessageEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Gewarnter Spieler", `<@${wUser.id}>`)
  .addField("Gewarnt in", message.channel)
  .addField("Warns", warns[wUser.id].warns)
  .addField("Grund", reason);

  let warnchannel = message.guild.channels.find(`name`, "log");
  if(!warnchannel) return message.reply("Ich konnte den Channel #log nicht finden!");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.reply("Du muss die Rolle @Muted erstellen.");

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> wurde gemutet weil er 2 Warns hat.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> wurde entmutet!`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 5){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> wurde gebannt!`)
  }

}

module.exports.help = {
  name: "warn"
}