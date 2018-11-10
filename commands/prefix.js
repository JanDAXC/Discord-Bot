const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {



  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Du hast dafür leider keine Rechte!");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.MessageEmbed()
  .setColor("#FF9900")
  .setTitle("Der Prefix wurde geändert!")
  .setDescription(`Der Prefix wurde zu ${args[0]} geändert`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}