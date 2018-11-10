const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {

const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
const Embed = new Discord.MessageEmbed()
 .setTitle(`Alle Emojis von dem Server ${message.guild.name}:`)
 .setColor(config.green)
 .setDescription(emojiList)
 .setThumbnail(message.guild.iconURL)

  message.channel.send(Embed)
}

module.exports.help = {
    name: "emojis"
  }