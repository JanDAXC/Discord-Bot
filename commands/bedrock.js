const Discord = require('discord.js');
const fs = require('fs')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports.run = async (client, message, args) => {
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
let prefix = prefixes[message.guild.id].prefixes;
}

function status(callback, username) {
	var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://mcapi.de/api/user/'+username, true);
      ourRequest.onload = () => {
		var ourData = JSON.parse(ourRequest.responseText);
		callback(null, checkStatus(ourData));
    };
	ourRequest.onerror = function() {
  		console.error(ourRequest.statusText);
	};
    ourRequest.send();
}

function checkStatus(data, channel){
    let Embed = new Discord.MessageEmbed()
    .setTitle("Stats von dem Spieler **" + data.username + "**")
    .setColor("#15f153")
    .setDescription("Premium Account **" + data.premium + "**")

   return(Embed)
	} 



module.exports.run = async (client, message, args) => {
    
	var args = message.content.split(/[ ]+/);

	

		if(args.length === 1){
			message.channel.send('Du hast die falschen Argumente angegeben. Usage: `!status [ip]`');
		} else if (args.length === 2){
			status((error, result) => {
				if (error) {
					message.channel.send("error!");
					return;
				}
			message.channel.send(result);
		}, args[1]);
		} else {
			message.channel.send('Du hast zu wenig Argumente angegeben. Usage: `!status [ip]`');
		}
    }

module.exports.help = {
    name: "mcspieler"
  }
