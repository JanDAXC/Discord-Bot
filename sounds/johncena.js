const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 message.delete();
 message.channel.send(` `, {
   files: [
     "./johncena.mp3"
   ]
 })
}

module.exports.help = {
    name: "johncena"
  }