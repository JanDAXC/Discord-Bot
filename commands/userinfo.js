const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

const status = {
  online: "Online",
  idle: "Abwesend",
  dnd: "Bitte nicht stören",
  offline: "Offline"
};
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = (client, message, args, channel, guild, game, user) => {
    let member = message.mentions.members.first() || message.member;
  if (!member) return message.reply("Ich konnte den Spieler nicht finden.");
  let embed = new Discord.MessageEmbed()
    .setColor(randomColor)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL()}`)
    .addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "hat keine Nickname!"}`, true)
    .addField("Bot", `TheRealBot 🎃#6589`, true)
    .addField("Server", `${message.guild}`, true)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Spielt", `${member.user.presence.game ? member.user.presence.game.name : "Nichts"}`, true)
    .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("Beigetreten am", `${moment.utc(member.joinedAt).locale('de').format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Account erstellt am", `${moment.utc(member.user.createdAt).locale('de').format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

  message.channel.send(embed)
}

exports.help = {
  name: "userinfo",

};