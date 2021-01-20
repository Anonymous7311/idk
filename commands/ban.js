const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'ban',
    description: "bans a user", 
    execute(message, args, guild){
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('u thought');
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let reason = args.join(" ").slice(22);
        if(!reason) reason = "No reason was given"
        const noMention = new Discord.MessageEmbed()
        .setTitle('Error:')
        .setDescription('Please provide a user to ban')
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        .setTimestamp()
        if(!user) return message.channel.send(noMention);
        const cantBan = new Discord.MessageEmbed()
        .setTitle('Error:')
        .setDescription('This use cannot be banned.')
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        .setTimestamp()
        if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(cantBan);
        if(!user) return message.channel.send("Please provide a user to kick");
        const banEmbed = new Discord.MessageEmbed()
        .setTitle(`User banned:`)
        .setDescription(`${user} has been banned`)
        .addField('Reason:', `${reason}`)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        message.channel.send(banEmbed);
        user.ban({reason: reason})



    }
}
