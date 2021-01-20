module.exports = {
    name:'sin',
    description: "finds the sin of a given number",
    execute(message, args){
        if(isNaN(args[0])) return message.channel.send('Please provide a maximum number')
        function getSinFromDegrees(degrees) {
            return Math.sin(degrees * Math.PI / 180);
          }
          message.channel.send(getSinFromDegrees(args[0]))

    }
}
        
