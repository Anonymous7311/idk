module.exports = {
    name:'tan',
    description: "finds the tan of a given number",
    execute(message, args){
        if(isNaN(args[0])) return message.channel.send('Please provide a maximum number')
        function getTanFromDegrees(degrees) {
            return Math.tan(degrees * Math.PI / 180);
          }
          message.channel.send(getTanFromDegrees(args[0]))

    }
}
       