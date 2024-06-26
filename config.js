//GIFTED-MD//

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kkeizzah@gmail.com";
global.location = "Migori,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://taha16511:4uPo1wMZxKzrqobP@cluster0.dvlwfxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null" 
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.devs = "923161581842";
global.sudo = process.env.SUDO || "923161581842";
global.owner = process.env.OWNER_NUMBER || "923103443197";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923103443197";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUo0bG9uZzAvS3ZseWJkSGsxbWxFdVREelZ0aTlVUFZVZy9tQm41ZDNITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXl3TmtCN0dXbkwxOHVaMmpYUW43L1V3cVdrV2hnWW1yTThTVnRLbGZnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT1hNWGp0Nk9Ib1VpNkRtOE1lZ2Fnc2FWWjE2ZDVwOUU5OVo4ZUFVeFhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5NitUaGVxbmZwelJ6SUlPYnMxUkI0MHd3ZnJKRkc2aEFLeEhneEZSclRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGMEFCVHIyN0IrbzNOM1FlaGVZM2FrWVlxN2VNNldDaVVmVlo0V3YwV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgxeUkrQnVra0M4N0dRaDNFL21xV0tKRFdrQ1d3TDVmR2ZqekJ3SXdGeGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUQ3SFdvSUVpMThrR0dWckdWQXdidGlwbXVxLzVsNCtiSmx3cXU1NUlWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHJVdG9Ob3JPYllNWlVxcmtTam9CY1BRVUlHbVlWcWUrbmtTeW5OUkVXcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks4VW5IbUo2Qmd6dGc4QXZHSnlMK1l2M1RGSlJTNDU5dmZnVW56TmRHbEFHa0pQTGk4ZG9ZLzhCNzJoUzlESGdjNE11UDJqMy82ODZrVytmZjBiL2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiIra0tDbkp3NERNZmRiN2IwQW80S3E4M3NJdmJCL0krQzk2cFdocTZ0Q1d3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEwMzQ0MzE5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRkY1RDI1MTlEOUIyOTA0NUM0MEZCMEU5NjdCNjE0MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NDA3NjgxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMDM0NDMxOTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDZBREVBRjhGRTk2ODE3MTZEODQyRDhCN0ZCNDVENzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTQwNzY4Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUXQtc0o1X1RUeldlT3VsR0NCeVVndyIsInBob25lSWQiOiJkOWViMzBmZC1jMmU2LTRmYWEtODg0YS1hYWYyMjNiMDU3YzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEVXRDJjWHk2WUtZZTVDOE92WndkcGx1cGMwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpDaTlUaDdmODk1UHJ3YTZnbGEwK244QmdFMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFQ01TSDlXMyIsIm1lIjp7ImlkIjoiOTIzMTAzNDQzMTk3OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1Rqa3JNQ0VMT284TE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZnFpbTIrdDJxWVl4dnJzcTRscVhQZUFVYXVMZ3h5M0QvZ2lreFd5OVUzYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidmV2TEdQNWN6ckdlWEdwSCswdmhlMVBBV2M3Vlp4dWhoQVhITGpKTXBZYlJrU2tiNHlWRzNDV01LMEtmQzJuL0RmdEdoaGdjbVVhVzF1dUFqZCtJQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjR0U29IMkpLZmd3MmxoZGlsSDgyL3FNTmlzd1RPOWphY3h6SHZ6MVB0bXliWmdGRTUwMXluU2l1WnhOVm53S0M3UGd2aWxndFR4c3JyVnBUcHE0d2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTAzNDQzMTk3OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDZvcHR2cmRxbUdNYjY3S3VKYWx6M2dGR3JpNE1jdHcvNElwTVZzdlZOMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTQwNzY3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPNFEifQ=="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "𝐌𝐈𝐆𝐇𝐓𝐘 𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  author: process.env.PACK_AUTHER || "Keith Tech",
  packname: process.env.PACK_NAME || "Keith-Md♥️",
  botname: process.env.BOT_NAME || "𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "T_Y",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
