const math = require('mathjs')
module.exports = {
    name: 'multiply',
    description: 'multiplies 2 numbers',
    execute(message, args){
        var nums = args.join(" ");
        let array = nums.split(" ")
        var product = math.prod(array);
        message.channel.send(product);

        }
}