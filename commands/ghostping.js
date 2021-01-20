module.exports = {
  name: 'ghostping',
  description: "ghost pings someone haha",
  execute(message, args){

      if(message.member.hasPermission("ADMINISTRATOR")){
              message.delete().catch();
          }
      }
  }

