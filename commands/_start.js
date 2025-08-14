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

HTTP.get({url: "https://checker-ig.indiansmmprovider.co.in/proxy.php?num="+message+"", success: "/num"})
