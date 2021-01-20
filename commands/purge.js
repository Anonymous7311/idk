const Discord = require('discord.js');
const { execute } = require('./ping');
module.exports = {
    name:'purge',
    description:'purges a ton of messages ig',
    execute(message, args) {
        let noperm = new Discord.MessageEmbed()
        .setTitle("Insufficient permissions.")
        .setDescription(`${message.author} You do not have permission to perfom this command.`)
        .setColor(0x01DF01)
        .setTimestamp();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperm)


        let amount = args[0]
        const noAmount = new Discord.MessageEmbed()
        .setTitle(`Error:`)
        .setDescription("Please provide an amount of messages to purge")
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        .setTimestamp()
        if(!amount) return message.channel.send(noAmount);


        message.channel.bulkDelete(amount)
        message.delete().catch();
        let success = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`Successfully purged ${amount} messages`)
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        .setTimestamp()
        message.channel.send(success)

    }

}