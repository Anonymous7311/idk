module.exports = {
    name: 'gay',
    description: "a really gay command",
    execute(message, args){
        try{
            if(args[0] === '69') return message.channel.send('holy shit ur gay');
            if(isNaN(args[0])) return message.channel.send('use a number idiot');
            if(args[0]>100000) return message.channel.send('no fuck you');
        while(args[0]>1){
            args[0] = args[0]-2
            
        }
        message.channel.send(args[0])
            }
            catch(err){console.log}
        }
    }
