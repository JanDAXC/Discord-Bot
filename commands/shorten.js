const Discord = require("discord.js");
const shorten = require("isgd");

module.exports.run = async (client, message, args, tools) => {

if (!args[0]) return message.channel.send('Du hast die falschen Argumente angegeben: !shorten <URL> [Titel]')


if(!args[1]) {

    shorten.shorten(args[0], function(res) {
        if(res.startsWith('Error:'));
        message.channel.send(`**<${res}>**`);
    })
} else {


    shorten.custom(args[0], args[1], function(res) {
   if(res.startsWith('Error'));
   message.channel.send(`**<${res}>**`)
    })
}




}   

module.exports.help = {
    name: "shorten"
  }