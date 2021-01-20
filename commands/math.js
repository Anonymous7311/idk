const Discord = require("discord.js");
const math = require("mathjs");
const config = require('./config.json');
const prefix = config.prefix;
module.exports = {
    name: "math",
    description: "does math",
    execute(message, args){
        const notAFunction = new Discord.MessageEmbed()
        .setTitle('Error')
        .setDescription(`${args[0]} is not a function. Please refer to ${prefix}help math to find the available functions`)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        let choice = args[0];
        let removedchoice = args.slice(1).join(" ")
        let split = removedchoice.split(" ")
        switch(choice){
            case "add":
                let sum = math.sum(split)
                message.channel.send(sum)
                break;
            case "multiply":
                let multiply = math.prod(split)
                message.channel.send(multiply);
                break;
            case "divide":
                let divide = math.divide(args[1], args[2])
                message.channel.send(divide)
                break;
            case "average":
                let average = math.mean(split)
                message.channel.send(average)
                break;
            case "cos":
                function cosToDegrees(degrees) {
                    return math.cos(degrees * Math.PI / 180);
                }
                let cos = cosToDegrees(args[1])
                message.channel.send(cos)
                break;
            case "sin":
                function sinToDegrees(degrees) {
                    return math.sin(degrees * math.pi / 180);
                }
                let sin = sinToDegrees(args[1])
                message.channel.send(sin)
                break;
            case "tan":
                function tanToDegrees(degrees) {
                    return math.tan(degrees * math.pi / 180);
                }
                let tan = tanToDegrees(args[1])
                message.channel.send(tan)
                break;
                default: message.channel.send(notAFunction)
        }
    }
}