const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Du hast keine Rechte dafür!");
  if(!args[0]) return message.channel.send("Bitte gib eine Zahl an! Usage: !clear [1-100]");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} Nachrichten wurde erfolgreich gelöscht!`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}