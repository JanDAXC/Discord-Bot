const Discord = require("discord.js");


module.exports = (client, member) => {

console.log(`Der Bot wurde auf ${client.guilds.size} Servern gestartet!`);
var channel = client.channels.get('504714351127560202');
client.user.setActivity(`!help | ${client.guilds.size} Server`, { type: 'WATCHING' });


}
