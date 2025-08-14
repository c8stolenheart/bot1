/*CMD
  command: /fetchnum
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let number = message;

// ✅ Make API call
HTTP.get({
  url: "https://checker-ig.indiansmmprovider.co.in/proxy.php?num=" + number,
  success: "/num"
});

