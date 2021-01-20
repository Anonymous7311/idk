const Discord = require('discord.js');
module.exports = {
  name: 'ping',
  description: "finds the ping",
  execute(message, args){
            message.channel.send(`Pinging... `).then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            m.edit(`Pong! ${ping}ms`)
    });
  }
}