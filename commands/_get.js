/*CMD
  command: /get
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: mail

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Sucess Bot Sent")
