const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
    if(message.author.id !== "285418000734093312") return;
    client.user.setActivity(`!help | ${client.guilds.size} Server`, { type: `WATCHING` });

}

module.exports.help = {
    name: "presencer"
  }