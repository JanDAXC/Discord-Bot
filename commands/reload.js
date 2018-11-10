const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
  if(message.author.id !== "285418000734093312") return;
    if(!args || args.size < 1) return message.reply("Du musst ein Command angeben.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.reply("Der Command exestiert nicht");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`Der Command  ${commandName} wurde neugeladen!`);
    console.log(`Der Command ${commandName} wurde neugeladen!`)
  };

    
  
module.exports.help = {
    name: "reload"
  }