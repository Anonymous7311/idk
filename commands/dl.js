module.exports = {
  name: 'dl',
  description: "shows where to download the mod",
  execute(message, args){
    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
    .setTitle('Download the mod')
    .setColor(0x01DF01)
    .setDescription('The download to the mod can be found on either Alizers channel or Adafs channel. \n [Adaf](https://www.youtube.com/channel/UCDnlxnVCzm-rdK7b13eDkRQ) \n [Alizer](https://www.youtube.com/channel/UCTtA84Gb2StiefbZfCx9i6A)')
    message.channel.send(embed);
  }
}
