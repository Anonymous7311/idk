const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'slowmode',
    description: "sets the slowmode of a channel", 
    args: true,
    execute(message, args){
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
                if (args[0] == 'off') {args[0] = 0}
                if (isNaN(args[0])) return message.reply('Enter a fucking **number** you dumbass.');
                message.channel.setRateLimitPerUser(args[0]);
                if (args[0] == '0') return message.channel.send(`**Channel slowmode for ${message.channel} de-activated.**`)
                if (args[0] != '0') return message.channel.send(`**Channel slowmode for ${message.channel} activated. timeout: ${args[0]} seconds.**`)
            }
    }
