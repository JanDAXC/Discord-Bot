const Discord = require("discord.js");
const moment = require("moment");

module.exports = (guild, user, message, client) => {
    const channel = guild.channels.find(ch => ch.name === 'mod-log');
    const embed = new Discord.MessageEmbed()
    .setTitle(`Der Spieler **${user.tag}** wurde gebannt!`)
    .setColor(0x00ff1d)
    .setDescription(`Der Spieler wurde gebannt am: ${moment.parseZone(message.createdAt).locale('de').format('dd, DD-MM-YYYY, HH:mm')}`)
    .setFooter('Log-System')
    channel.send(embed); 
  }
