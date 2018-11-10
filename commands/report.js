const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Ich konnte den Spieler leider nicht finden!");
    let rreason = args.slice(1).join(" ") || "Keinen";

    let reportEmbed = new Discord.MessageEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reporteter Spieler", `${rUser} mit der ID: ${rUser.id}`)
    .addField("Reportet von", `${message.author} mit der ID: ${message.author.id}`)
    .addField("Reportet in", message.channel)
    .addField("Zeit", message.createdAt)
    .addField("Grund", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Ich konnte den Channel #reports nicht finden.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
