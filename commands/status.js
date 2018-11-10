const Discord = require('discord.js');
const fs = require('fs')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports.run = async (client, message, args) => {
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
let prefix = prefixes[message.guild.id].prefixes;
}

function status(callback, ip) {
	var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://mcapi.us/server/status?ip='+ip, true);
      ourRequest.onload = () => {
		var ourData = JSON.parse(ourRequest.responseText);
		callback(null, checkStatus(ourData));
    };
	ourRequest.onerror = function() {
  		console.error(ourRequest.statusText);
	};
    ourRequest.send();
}

function checkStatus(data, ip){
	if(data.online){
		let Embed = new Discord.MessageEmbed()
		.setColor("#426bf4")
		.setTitle(`Stats von dem Server __**${data.motd}**__`)
		.addField("Spieler", data.players.now + "/" + data.players.max, true)
		.addField("Online", data.online, true)
		.addField("Server", data.server.name, true)
		return(Embed) 
	} else {
		return "Der Minecraft Server ist Offline.";
	}
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
    name: "mcserver"
  }
