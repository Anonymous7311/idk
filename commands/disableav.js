const { GuildMember, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'disableav',
    description: "Describes how to disable windows antivirus",
    execute(message){
            message.delete().catch();
        const embed = new MessageEmbed()
        .setTitle('How to disable Windows Defender')
        .setColor(0x01DF01)
        .setDescription('1. Search for "Windows Security in the windows search bar. \n 2. Click on "Virus and Threat Protection" \n 3. Click "Manage Settings" and turn "Real-time protection" off ')
        message.channel.send(embed);
        }
    }
    
