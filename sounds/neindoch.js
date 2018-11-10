const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 message.delete();
 message.channel.send(` `, {
   files: [
     "./neindoch.mp3"
   ]
 })
}

module.exports.help = {
    name: "neindochohh"
  }