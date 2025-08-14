/*CMD
  command: /num
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

var response = content;
var lib = Libs.ReferralLib;
var refList = lib.currentUser.refList.get();

// ✅ Try parsing JSON safely
function isJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

if (!isJSON(response)) {
  Bot.sendMessage("⚠️ Received an invalid response from the server:\n" + response.substring(0, 200));
  return;
}

var data = JSON.parse(response);

// ✅ Check if "No records found" is in any of the data (stringify check)
if (JSON.stringify(data).includes("No records found")) {
  Bot.sendMessage("❌ No record found.");
  return;
}

// ✅ Check if the response has mobile results
if (JSON.stringify(data).includes("mobile")) {
  Bot.sendMessage("✅ " + data.length + " Result(s) Found for Mobile Search:\n");

  data.forEach(function(entry, index) {
    var mobile = entry.mobile || "N/A";
    var name = entry.name || "N/A";
    var fatherName = entry.father_name || "N/A";
    var address = entry.address || "N/A";
    var altMobile = entry.alt_mobile || "N/A";
    var circle = entry.circle || "N/A";
    var idNumber = entry.id_number || "N/A";
    var email = entry.email || "N/A";

    Bot.sendMessage(
      "\n— Result " + (index + 1) + " —\n" +
      "==============================\n" +
      "📱 MOBILE INFORMATION\n" +
      "==============================\n" +
      "👤 Name: " + name + "\n" +
      "📞 Phone: " + mobile + "\n" +
      "👴 Father's Name: " + fatherName + "\n" +
      "📱 Alternate Mobile: " + altMobile + "\n" +
      "🔴 Circle: " + circle + "\n" +
      "🆔 Aadhar Number: " + idNumber + "\n" +
      "✉️ Email: " + email + "\n" +
      "🏠 Address: " + address + "\n" +
      "=============================="
    );
  });
} else {
  Bot.sendMessage("⚠️ No mobile data found in response.");
}

