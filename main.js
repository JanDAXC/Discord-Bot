// Load up the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs      = require('fs')
const RichEmbed = require('discord.js').RichEmbed
const moment = require('./node_modules/moment');
const ms = require("ms");
const superagent = require("superagent")
const antispam = require("discord-anti-spam");
const enmap = require("enmap")
let xp = require("./xp.json");
let purple = config.purple;
let cooldown = new Set();
let cdseconds = 5;
let coins = require("./coins.json");
const { CmdParser } = require('discordjs-cmds')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
client.commands = new Discord.Collection();


antispam(client, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "Hör auf zu Spammen!", // Warning message send to the user indicating they are going to fast.
  banMessage: "wurde wegen Spamming gebannt, noch jemand?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
  deleteMessagesAfterBanForPastDays: 7, // Delete the spammed messages after banning for the past x days.
  exemptRoles: ["Admin", "Chat Moderator", "Moderator", "Mod", "👑TheRealJan👑", "👑Admin👑"], // The names of the roles which should not be spam-filtered
  exemptUsers: ["user#1234"] // The Discord tags of the users who should not be spam-filtered
});

fs.readdir("./commands/", (err, files) => {
  
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`Der Command ${f} wurde geladen!`);
      client.commands.set(props.help.name, props);
    });
  });

  fs.readdir("./sounds/", (err, files) => {
    
      if(err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if(jsfile.length <= 0){
        console.log("Ich konnte keine Sounds finden.");
        return;
      }
    
      jsfile.forEach((f, i) =>{
        let props = require(`./sounds/${f}`);
        console.log(`Der Sound ${f} wurde geladen!`);
        client.commands.set(props.help.name, props);
      });
    });


  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      console.log(`Das Event ${file} wurde geladen!`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  });



// config.token contains the bot's token
// config.prefix contains the message prefix.



client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'What is my Avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

  

client.on("message", (message, member, channel, customEmoji) => {
  
  
  if (message.content.includes("https://")) {
    if(message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete(1);
    message.channel.sendMessage("Keine Links hier, " + message.author + "!")
  }
  if (message.content.includes("http://")) {
    if(message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete(1);
    message.channel.sendMessage("Keine Links hier, " + message.author + "!")
  }
  
  if (message.content.includes("www.")) {
    if(message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete(1);
    message.channel.sendMessage("Keine Links hier, " + message.author + "!")
}




  if (message.author.bot) return;

  

  if(message.content === "Hi") {
    message.channel.send("Hey, wie gehts?");
  }
    
  if(message.content === "Gut") {
    message.channel.send("Super!");
  }

 
  if(message.content === "Kekse")
    message.channel.send("Wooooooo :cookie:?")
  if(message.content === "Schlecht") {
    message.channel.send("Das tut mir leid!");
  }
  if(message.author === '502923245519896577') {
    return;
  }
  if(message.content === "RIP") {
    message.channel.send("https://i.imgur.com/w3duR07.png")

  }
  if(message.content === "@TheRealJan's Bot#6589 wie gehts") {
    message.channel.send("Super! Dir?")
  }

  if(message.content === "lecker") {
  message.channel.send(` `, {
    files: [
      "./leckergif.gif"
    ]  
  })
}
if(message.content === "schlafmütze") {
  message.channel.send(` `, {
    files: [
      "./schlafmütze.gif"
    ]
  })
}
if(message.content === "polizei") {
  message.channel.send(` `, {
  files: [
    "./polizei.gif"
  ]
  })
}
if(message.content === "geschenk") {
  message.channel.send(` `, {
    files: [
      "./geschenk.gif"
    ]
  })
}
});

client.on("message", async message => {
 
    
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
}

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
}

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} Coins hinzugefügt!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;



  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 500;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.MessageEmbed()
    .setTitle("Du bist ein Level aufgestiegen!")
    .setColor(purple)
    .addField("Dein neues Level:", curlvl + 1);

    message.channel.send(lvlup)
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
});
let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let argst = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,argst);

  let blacklisted = ['Idiot', 'hurensohn', 'arschloch', 'ficker', 'fick', 'huansohn', 'urensohn', 'lappen', 'noob'];

  let foundInText = false;
  for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }

  if (foundInText) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return
    message.delete();
    message.channel.send(`Bitte benutz nicht solche Wörter, ${message.author}!`)

  }

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


});

client.login(config.token);
