const randomPuppy = require('random-puppy');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

randomPuppy()
   .then(url => {
       let Embed = new Discord.MessageEmbed()
       .setAuthor("Puppy Image")
       .setImage(url)

       message.channel.send(Embed)
   })
}
   module.exports.help = {
    name: "puppy"
  }