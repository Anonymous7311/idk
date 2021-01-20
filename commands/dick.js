const Discord = require('discord.js')
module.exports = {
    name: 'dick',
    description: 'tells how much of a juicy dick someone has',
    execute(message, args){
        const mentionedUser = message.mentions.users.first()
        const noMention = new Discord.MessageEmbed()
        .setTitle('Error')
        .setDescription('No user was mentioned')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        if(!mentionedUser) return message.channel.send(noMention)

        if(mentionedUser.id == '341994639395520526'){
            const sizes2 = ['8=======D', '8========D', '8==========D', '8===========D', '8==============D', '8=============D', '8==============D', '8==============D', '8=============D', '8==============D', '8==============D', '8=============D', '8==============D']
            const r8it2 = new Discord.MessageEmbed()
            .setTitle(`${mentionedUser.username}\'s dick:`)
            .setDescription(`${sizes2[Math.floor(Math.random() * sizes2.length)]}`)
            message.delete().catch()
            return message.channel.send(r8it2);
        }
        const sizes = ['8D','8D','8D','8D','8D', '8=D', '8==D', '8===D', '8====D', '8=====D', '8======D', '8=======D', '8========D', '8==========D', '8===========D', '8==============D', '8=============D', '8==============D']
        const r8it = new Discord.MessageEmbed()
        .setTitle(`${mentionedUser.username}\'s dick:`)
        .setDescription(`${sizes[Math.floor(Math.random() * sizes.length)]}`)
        message.delete().catch();
        message.channel.send(r8it)

    }
}