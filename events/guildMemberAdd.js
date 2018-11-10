const Discord = require("discord.js");


module.exports = (client, member, message) => {
    const channel = member.guild.channels.find(ch => ch.name === 'willkommen');
    
      const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle(`@${member.user.tag} hat den Server ${member.guild.name} betreten!`)  
      // Set the color of the embed
      .setColor(0x7af442)
      .setThumbnail('https://cdn.discordapp.com/avatars/285418000734093312/eda8385b01000fd055951aa9b4567dd7.png?size=2048')
      // Set the main content of the embed
      .setDescription('')
    // Send the embed to the same channel as the message
    message.channel.send(embed); 
    
    var role = member.guild.roles.find('name', "Spieler", "Member");
    member.addRole(role)
    }

  