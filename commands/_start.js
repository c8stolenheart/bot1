/*CMD
  command: /start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🔎 Send Number to search (without+91)

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendInlineKeyboard(
  [{ title: "📱 Enter Number", command: "/getnum" }],
  "👋 Welcome! This bot fetches mobile number details.\n\nClick below to begin."
);

