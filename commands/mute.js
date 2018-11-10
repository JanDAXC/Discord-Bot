const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Ich konnte den Spieler nicht finden!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Ich kann diesen Spieler nicht muten!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Du hast keine Zeit angegeben!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> wurde für ${ms(ms(mutetime))} gemutet!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> wurde entmutet!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute"
}