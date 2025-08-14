/*CMD
  command: /getnum
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
Bot.sendMessage("📩 Please send the mobile number (without +country code):");
Bot.runCommand("/fetchnum");

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage("📩 Please send the mobile number (without +country code):");
Bot.runCommand("/fetchnum");

