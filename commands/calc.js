const math = require('mathjs')
module.exports = {
    name: 'calc',
    description: 'calculates numbers',
    execute(message, args){
        const answer = math.evaluate(args)
        message.channel.send(answer)
        
    }
}