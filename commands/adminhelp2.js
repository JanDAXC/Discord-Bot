const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast dafür leider keine Rechte!");
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Alle Admin Features Seite 2:",
      icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
    },
    title: "Chat Clear",
    description: "Type **!clear (1-100)** into the chat and as many messages as you specified will be deleted in the channel!",
    fields: [{
        name: "Mute-System",
        value: "Gib **!mute (Spieler) (Zeit) ** Zeit heißt: wenn du ihn für 10 Sekunden Muten willst sind es 10s, für 10 Minuten 10m, für 10 Stunden 10h, für 10 Tage 10d!"
      },
      {
        name: "Anti-Spam",
        value: "Der Bot Mutet den Spieler wenn er 3 Nachrichten nicht mit jeweils 1 Sekunden abständen schreibt, bannt ihn wenn er 5 Nachrichten nicht mit 1 Sekunden abständen schreibt."
      },
      {
        name: "Warn-System",
        value: "Gib **!warn (Spieler) (Grund)** und der Spieler wird gewarnt, bei 3 Warns wird der Spieler 30min gebannt bei 5 wird er gebannt."  
      },
      {
        name: "Say Message",
        value: "Gib **!say (Titel) (Nachricht)** in Titel kommt der Titel der Embed Nachricht rein. Beachte: der Titel darf keine Leerzeichen im Text haben der Rest zählt als Nachricht!"
      }

    ],
    timestamp: new Date(),
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048",
      text: "© TheRealJan"
    }
  }
});
}

module.exports.help = {
    name: "adminhelp2"
  }