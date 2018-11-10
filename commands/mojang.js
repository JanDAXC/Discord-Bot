const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    

  let {body} = await superagent
  .get('https://status.mojang.com/check')

  let catEmbed = new Discord.MessageEmbed()
 
  .setAuthor('Cats', message.author.displayAvatarURL)
  .addField('API', body.api.mojang.com)

  message.channel.send(catEmbed);
  
}
module.exports.help = {
    name: "mojang"
  }