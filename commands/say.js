const {Util}  = require("discord.js");
const Discord = require('discord.js')
module.exports = {
    name: 'say',
    description: 'Returns the message you typed.',
    execute(message, args){
    if(message.member.hasPermission("MANAGE_MESSAGES") || message.author == '644182102819995668'){
        let say = args.join(" ")
        message.delete();
        message.channel.send(Util.cleanContent(say, message));
    }
        }
    }