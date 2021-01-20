const math = require("mathjs");
module.exports = {
    name: "average",
    description: "Calculates average of a number",
    execute(message, args) {
        var nums = args.join(" ");
        let array = nums.split(" ")
        var average = math.mean(array);
        message.channel.send(average);
    }
}