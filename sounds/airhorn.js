const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  message.channel.send(` `, {
    files: [
      "./airhorn.mp3"
    ]
  })
}

module.exports.help = {
    name: "airhorn"
  }