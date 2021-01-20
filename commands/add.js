const math = require('mathjs')
module.exports = {
    name: 'add',
    description: 'adds 2 numbers',
    execute(message, args){
        var nums = args.join(" ");
        let array = nums.split(" ")
        var sum = math.sum(array);
        message.channel.send(sum);
    }
}
