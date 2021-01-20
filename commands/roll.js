module.exports = {
    name:'roll',
    description: "random number",
    execute(message, args){
        try{
        function getRandomInt(max) {

            return Math.round(Math.random()*max);
        }
        if(isNaN(args[0])){
            message.channel.send('Please provide a maximum number')
            return;
        }
        message.channel.send(getRandomInt(args[0]))
    }
    catch(err){console.log}
    }
}

