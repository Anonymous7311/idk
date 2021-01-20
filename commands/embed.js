const Discord = require('discord.js');
const { string } = require('mathjs');
module.exports = {
    name: 'embed',
    description: "Creates an embed with a custom title and descripton. Syntax: -embed [title], [description]", 
    args: true,
    execute(message, args){

    function sendEmbed(message) {
        let command = message.content;
        let channel = message.channel;
        let author = message.author;
    
        // get title string coordinates in command
        let titleStart = command.indexOf('-t');
        let titleEnd = command.indexOf('-d')
        let title = command.substring(titleStart + 2, titleEnd - 1);
        // get description string coordinates in command
        // -> (start after +1 so we don't count '[' or ']' twice)
        let descStart = command.indexOf('-d');
        let descEnd = command.indexOf('-f')
        let description = command.substring(descStart + 2, descEnd -1);

        let footerStart = command.indexOf('-f')
        let footer = command.slice(footerStart + 2)
        
        // next create rich embed
        let embed = new Discord.MessageEmbed().setTitle(title).setDescription(description).setFooter(footer);
        // send embed to channel
        channel.send(embed);
        message.delete().catch();
    }

        sendEmbed(message);

;
    }
}
