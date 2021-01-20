const Discord = require("discord.js");
const fs = require('fs');
const { re } = require("mathjs");
const client = new Discord.Client({disableMentions: "everyone"}); 
client.commands = new Discord.Collection();
const {prefix, token} = require ('./config.json');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

}
client.once('ready', () => {

    console.log('Bot is ready.');
});
client.on('message', async message => {
    let alice = ['dumbass'];
    let inText = false;
    for (var i in alice){
        if(message.content.toLowerCase().includes(alice[i].toLowerCase())) inText = true;
        if(message.author == "387597578893524992" && inText){
            message.channel.send("dumbass")
        }
    }     
    let pingme = ["<@794666608861380638>"];
    let intext = false;
    for(var i in pingme){
        if(message.content.includes(pingme[i])) intext = true
        if (intext == true){
            message.channel.send("STOP PINGING ME")
        }
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if(!client.commands.has(commandName)) return;
    try{
        client.commands.get(commandName).execute(message, args, client);
    }catch(error){
        console.error(error);
        let cmderror = new Discord.MessageEmbed()
        .setTitle(`There was an issue executing the __${commandName}__ command.`)
        .setDescription(`Error:\n\n${error}.`)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({size: 1024, dynamic: true}))
        message.channel.send(cmderror)
    }
});
client.login(token);
        