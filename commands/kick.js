const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'kick',
    description: "kicks a user", 
    execute(message, args, guild){
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('u thought');
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let reason = args.join(" ").slice(22);
        if(!reason) reason = "No reason was given"
        const noMention = new Discord.MessageEmbed()
        .setTitle('Error:')
        .setDescription('Please provide a user to kick')
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        .setTimestamp()
        if(!user) return message.channel.send(noMention);
        const cantKick = new Discord.MessageEmbed()
        .setTitle('Error:')
        .setDescription('This use cannot be kicked.')
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        .setTimestamp()
        if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(cantKick);
        if(!user) return message.channel.send("Please provide a user to kick");
        const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`User kicked:`)
        .setDescription(`${user} has been kicked`)
        .addField('Reason:', `${reason}`)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        message.channel.send(kickEmbed);
        user.kick({reason: reason})



    }
}
