module.exports = {
    name: 'divide',
    description: 'divides 2 numbers',
    execute(message, args){
        try{
            
            if(isNaN(args[0] || args[1])){
                return;
            }

            const finalNumber = Number(args[0])/Number(args[1])
            message.channel.send(finalNumber)

        }
        catch(err){console.log}
    }
}