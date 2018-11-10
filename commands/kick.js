const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Ich konnte diesen Spieler nicht finden!");
    let kReason = args.slice(1).join(" ") || "Keinen";
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ich hab keine Rechte dafür!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ich kann diesen Spieler nicht kicken!");

    let kickEmbed = new Discord.MessageEmbed()
    .setDescription("**Kick**")
    .setColor("#e56b00")
    .addField("Gekickter Spieler", `${kUser} mit der ID ${kUser.id}`)
    .addField("Gekickt von", `<@${message.author.id}> mit der ID ${message.author.id}`)
    .addField("Gekickt in", message.channel)
    .addField("Zeit", message.createdAt)
    .addField("Grund", kReason);

    let kickChannel = message.guild.channels.find(`name`, "log");
    if(!kickChannel) return message.channel.send("Ich konnte den Channel #log nicht finden!");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
