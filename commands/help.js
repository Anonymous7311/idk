const Discord = require("discord.js");
const config = require('./config.json');
const prefix = config.prefix
module.exports = {
    name:'help',
    description: "lists commands",
    execute(message, args){
        try {

            if(args[0] === 'staff'){
                const staffEmbed = new Discord.MessageEmbed()
                .setTitle('Staff Commands')
                .addField('Slowmode', `Sets the slowmode of the channel it is used in. \n Usage: ${prefix}slowmode (time)`)
                .addField('Embed', `Creates an embed with a custom title and custom description \n Usage: ${prefix}embed [title]; [description] (keep the [])`)
                .addField('Kick', `Kicks a user from the server. \n Usage: ${prefix}kick (@user) (reason)`)
                .addField('Mute', `Mutes a user for a specific amount of time, or indefinitely. \n Usage: ${prefix}mute (@user) (time) (reason)`)
                .addField('Unmute', `Unmutes a user after they have been muted. \n Usage: ${prefix}unmute (@user) (reason)`)
                .addField('Ban', `Bans a user from the guild. \n Usage: ${prefix}ban (@user) (reason)`)
                .addField('Listmembers', `Displays all of the members with a specific role. \n Usage: ${prefix}listmembers (id or @role)`)
                .addField('Purge', `Purges a specific amount of messages. \n Usage: ${prefix}purge (amount)`)
                .setColor(0x01DF01)
                message.channel.send(staffEmbed)
                return;
            }
            if(args[0] === 'fun'){
                const funEmbed = new Discord.MessageEmbed()
                .setTitle('Fun commands')
                .addField('Say', `Make the bot say whatever you want. This cannot mention people or roles. \n Usage: ${prefix}say (whatever you want it to say)`)
                .setColor(0x01DF01)
                message.channel.send(funEmbed)
                return;
            }
            if(args[0] === 'math'){
                const mathEmbed = new Discord.MessageEmbed()
                .setTitle('Math commands')
                .addField('Add', `Adds numbers together. \n Usage: ${prefix}add (num1) (num2)`)
                .addField('Multiply', `Multiplies numbers together. \n Usage: ${prefix}multiply (num1) (num2)`)
                .addField('Divide', `Divides two numbers. \n Usage: ${prefix}divide (num1) (num2)`)
                .addField('Sin', `Finds the sin value of a given number. \n Usage: ${prefix}sin (num)`)
                .addField('Cos', `Finds the cos value of a given number \n Usage: ${prefix}cos (num)`)
                .addField('Tan', `Finds the tan value of a given number. \n Usage: ${prefix}tan (num) `)
                .setColor(0x01DF01)
                message.channel.send(mathEmbed)
                return;
            }
            if(args[0] === 'utility'){
                const utilityEmbed = new Discord.MessageEmbed()
                .setTitle('Utility commands')
                .addField('Avatar', `Displays the mentioned users avatar. \n Usage: ${prefix}avatar (@user)`)
                .addField('Ping', `Displays the amount of time it takes the bot to receive your message. \n Usage: ${prefix}ping`)
                .addField('Roll', `Rolls a random number with a user specified maximum. \n Usage: ${prefix}roll (max)`)
                .addField('Download', `Displays where you can find the download of the latest version of the mod \n Usage: ${prefix}download`)
                .addField('Disableav', `Describes how to disable windows defender antivirus. \n Usage: ${prefix}disableav`)
                .setColor(0x01DF01)
                message.channel.send(utilityEmbed);
                return;
            }
            else{
            const embed = new Discord.MessageEmbed()
            .setTitle('Please select a category!')
            .setColor(0x01DF01)
            .addFields(
                {name: "Staff", value: `Run \`${prefix}help staff\` to view the staff commands.`, inline: true},
                {name: "Fun", value: `Run \`${prefix}help fun\` to view the fun commands.`, inline: true}
                )
            .addFields(
                {name: "Math", value: `Run \`${prefix}help math\` to view the math commands`, inline: true},
                {name: "Utility", value: `Run \`${prefix}help utility\` to view the utility commands`, inline: true}
            )
            .setFooter('This is probably outdated')
            .setThumbnail("https://cdn.discordapp.com/avatars/341994639395520526/abef0c02dc1bb40ed8a7bdf108c0111a.webp?size=1024")
            message.channel.send(embed)
            return;
            }


        }
        catch(err){console.log}
        }
    }
