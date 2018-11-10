const Discord = require("discord.js");

module.exports = (client, guild) => {
    
    console.log(`Ein neuer Server ist da: ${guild.name} (id: ${guild.id}). Der Server hat ${guild.memberCount} Spieler!`);
    client.user.setActivity(`!help | ${client.guilds.size} Server`, { type: 'WATCHING' });
    const embed = new Discord.MessageEmbed()
    // Set the title of the field
    .setTitle(`Danke für das einladen auf deinen Server!`)  
    // Set the color of the embed
    .setColor(0xf20000)
    .setThumbnail('https://cdn.discordapp.com/avatars/285418000734093312/eda8385b01000fd055951aa9b4567dd7.png?size=2048')
    // Set the main content of the embed
    .setDescription('Für Hilfe gib !help in den Chat ein.')
  // Send the embed to the same channel as the message


guild.defaultChannel.send(embed)
}