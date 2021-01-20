const Discord = require('discord.js')
module.exports = {
    name: "reload",
    description: "reloads a command",
    execute(message, args, client){
        if(!args[0]) return message.reply("Please enter a command"); 
        const noPerms = new Discord.MessageEmbed()
        .setTitle('Error')
        .setDescription(`You lack the required permissions to perform this command`)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}));
        if(message.author.id !== "341994639395520526") return message.reply(noPerms)
        try{
            delete require.cache[require.resolve(`./${args[0]}.js`)]
            const props = require(`./${args[0]}.js`);
            client.commands.set(args[0], props);
        }catch(e){
            console.log(e)
            const errorEmbed = new Discord.MessageEmbed()
        .setTitle('Error')
        .setDescription('There was an error trying to reload this command')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        return message.channel.send(errorEmbed);

        }
        const successEmbed = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`${args[0]} has been reloaded.`)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        message.channel.send(successEmbed)
    }
}



