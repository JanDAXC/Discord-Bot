
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast dafür keine Rechte!");
      let Title = args[0]; // Remember arrays are 0-based!.
      let Description = args.slice(1).join(" ")
      
      message.delete().catch();
      const Embed = new Discord.MessageEmbed()
      .setColor("#fc6400")
      .setTitle(Title)
      .setDescription(Description)
      message.channel.send(Embed);

}

module.exports.help = {
  name: "say"
}