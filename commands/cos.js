module.exports = {
    name:'cos',
    description: "finds the cos of a given number",
    execute(message, args){
        if(isNaN(args[0])) return message.channel.send('Please provide a maximum number')
        function getCosFromDegrees(degrees) {
            return Math.cos(degrees * Math.PI / 180);
          }
          message.channel.send(getCosFromDegrees(args[0]))

    }
}
       
