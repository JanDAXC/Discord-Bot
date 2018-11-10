const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
    let Type = args[0] || `!help | ${client.guilds.size} Server`;
    let Description = args.slice(1).join(" ")
    if(message.author.id !== "285418000734093312") return;
    if(!Type) return message.channel.send("Bitte geb den Typ an! Usage: !presence **[WATCHING/PLAYING/LISTENING] [TEXT]**");
    if(!Description) return message.channel.send("Bitte gib den Text an! Usage: **!presence [WATCHING/PLAYING/LISTENING] [TEXT]**");
    client.user.setActivity(`${Description}`, { type: `${Type}` });

}
module.exports.help = {
    name: "presence"
  }