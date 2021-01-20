const math = require('mathjs')
const Discord = require('discord.js')
const { mod } = require('mathjs')
module.exports = {
    name: '8ball',
    description: 'does 8ball shit idk',
    execute(message, args){
        const question = args.join(" ")
        let author = message.author
        const responses = ['As I see it, yes.', ' Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it', 'It is certain', 'It is decidedly so.']
        if(question == 'is alice a dumbass'){
            let responses = 'Without a doubt.'
            const embed = new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription(`${author}, ${responses}`)
            .setTimestamp()
            .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
            message.channel.send(embed)
        }
        else{
            const embed2 = new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription(`${author}, ${responses[Math.floor(Math.random() * responses.length)]}`)
            .setTimestamp()
            .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
            message.channel.send(embed2)
        }
    }
}