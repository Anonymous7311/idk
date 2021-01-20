const Discord = require("discord.js");
const ms = require('ms');
module.exports = {
    name: 'testmute',
    description: 'Mutes the mentioned user',
    async execute(message, args){

        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            message.channel.send("no perms")
        }
        if(message.member.hasPermission("ADMINISTRATOR")){
            message.channel.send("admin")
        }
    }
}

   