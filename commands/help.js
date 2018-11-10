const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   
    
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Help:",
        icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
      },
      title: "Du weißt nicht alle Commands?",
      description: "Schreib !commands in den Chat.",
      fields: [{
          name: "Du brauchst den Invite-Link?",
          value: "Gib !credits an und klick oben auf den Link."
        },
        {
          name: "Du willst wissen wer der Developer ist?",
          value: "Der Developer is TheRealJan#3022"
        },
        {
          name: "Du hast immernoch fragen??",
          value: "Sende mir eine Freundschaftsanfrage auf Discord, TheRealJan#3022"
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
    name: "help"
  }