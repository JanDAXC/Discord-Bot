const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Du hast keine Rechte dafür!");
  
  if(!wUser) return message.reply("Ich konnte den Spieler nicht finden!");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> hat ${warnlevel} Warn(s).`);

}

module.exports.help = {
  name: "warns"
}