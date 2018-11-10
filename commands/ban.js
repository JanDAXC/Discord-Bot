const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Ich kann diesen Spieler nicht finden!");
    let bReason = args.slice(1).join(" ") || "None";
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Ich hab keine Rechte dafür!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ich kann diesen Spieler nicht Bannen!");

    let banEmbed = new Discord.MessageEmbed()
    .setDescription("**Ban**")
    .setColor("#bc0000")
    .addField("Gebannter Spieler", `${bUser} mit der ID ${bUser.id}`)
    .addField("Gebannt von", `<@${message.author.id}> mit der ID ${message.author.id}`)
    .addField("Gebannt in", message.channel)
    .addField("Zeit", message.createdAt)
    .addField("Grund", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "log");
    if(!incidentchannel) return message.channel.send("Ich konnte den Channel #log nicht finden!");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
