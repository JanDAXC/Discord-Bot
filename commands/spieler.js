const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    

  message.channel.send({embed: {
    color: 3447003,
    description: `Der Server hat: ${message.guild.memberCount} Spieler`
    }});    

}
    module.exports.help = {
        name: "spieler"
      }