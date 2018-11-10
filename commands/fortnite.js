const Discord = require("discord.js")
const keys = require("../apikeys.json")
const Client = require('fortnite');
const fortnite = new Client(keys.fortnite);

module.exports.run = async (client, message, args) => {
    await message.delete();
    let username = args[0];
    let plattform = args[1] || 'pc';
    if(!username) return message.reply("Bitte geb ein Name an.")
        let data = fortnite.user(username, plattform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
        
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let embed = new Discord.MessageEmbed()
        .setTitle(`__Fortnite Lifetime Stats von ${data.username}__`)
        .setAuthor(data.username)
        .setColor("#0000FF")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Spiele gespielt", mplayed, true)
        .addField("Gewinn %", winper, true)
        .addField("K/D", kd, true)

        message.channel.send(embed);
        });
}

module.exports.help = {
    name: "fortnite"
  }