module.exports = {
  name: 'download',
  description: "shows where to download the mod",
  execute(message, args){
    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
    .setTitle('Download the mod')
    .setColor(0x01DF01)
    .setDescription('The download to the mod can be found on either [Alizer\'s](https://www.youtube.com/channel/UCTtA84Gb2StiefbZfCx9i6A) channel or [Adaf\'s](https://www.youtube.com/channel/UCDnlxnVCzm-rdK7b13eDkRQ) channel. \n \n Please do not trust any other source to download the mod from, unless one of the channels listed above has confirmed that it is safe.')
    message.channel.send(embed);
  }
}