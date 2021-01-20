const Discord = require("discord.js");
module.exports = {
  name: 'avatar',
  description: "retrieves the avatar of the mentioned user",
  execute(message, args) {
    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 1024, dynamic: true})

    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username}'s avatar`)
    .setImage(avatar)
    .setColor(0x01DF01)
      message.channel.send(embed);

  }
  
}