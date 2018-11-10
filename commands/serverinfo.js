const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
       .setColor("0xffffff")
       .setTitle(`${message.guild} Serverinfo!`)
       .setDescription("__Serverinfo__")
       .addField("Server ID", message.guild.id, true)
       .addField("Owner", message.guild.owner, true)
       .addField("Owner ID", message.guild.ownerID, true)
       .addField("Roles", message.guild.roles.size, true)
       .addField("Region", message.guild.region, true)
       .addField("Spieler", message.guild.memberCount, true)
       .setFooter("Der Server wurde erstellt am:")
       .setTimestamp(message.guild.createdAt)
    .setThumbnail(message.guild.iconURL)
      message.channel.send(embed)
}
      module.exports.help = {
        name: "serverinfo"
      }