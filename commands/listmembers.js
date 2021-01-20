const Discord = require('discord.js');
module.exports = {
    name: 'listmembers',
    description: "lists the members the are in a specified role",
    execute(message, args){
        let lrole = args.join(" ")
        let rname = message.guild.roles.cache.find(r => r.id == lrole) || message.guild.roles.cache.find(rn => rn.name === lrole)
        let rolenot = new Discord.MessageEmbed()
        .setTitle("Role not found.")
        .setDescription(`\`${lrole}\` was not found in the server.`)
        .setColor("FF0000")
        .setTimestamp();
        if(!rname) return message.channel.send(rolenot)
        let list = new Discord.MessageEmbed()
        .setTitle(`Members with ${rname.name}`)
        .setDescription(`\`${rname.members.map(m=>m.user.tag).join('\`\n\`')}\``)
        .setTimestamp()
        .setColor(0x01DF01)
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        message.channel.send(list)
    }
}
