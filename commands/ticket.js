
const Discord = require("discord.js");

module.exports.run = async (client, message, args, guild) => {
  
      let Title = args[0];
      let Description = args.slice(1).join(" ")
      if(!Title) return message.channel.send("Bitte gib das Problem an! Usage: !ticket (Problem z.b. Bug) (Text)");
      if(!Description) return message.channel.send("Bitte gib ein Text an um das Problem zu schreiben! Usage: !ticket (Problem z.b. Bug) (Text)");
      
      message.delete();
      let Embed = new Discord.MessageEmbed()
      .setDescription("**Ticket**")
      .setColor("#15f153")
      .addField("Spieler", `${message.author.tag}`)
      .addField("Problem", `${Title}`)
      .addField("Beschreibung", `${Description}`)
      
    let TicketChannel = message.guild.channels.find(channel => channel.name === 'tickets');
    if(!TicketChannel) return message.channel.send("Ich konnte den Channel #tickets nicht finden.");

    TicketChannel.send(Embed);
}

module.exports.help = {
  name: "ticket"
}