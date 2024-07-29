const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349155737244";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_38_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICAxNSxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxTQ2taRXFrVGlOQkIwQkZqbkxiV0tMV2FDaGRtUHVWQlNDeDhmK2ZIbVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJiUGZhNTl2UkthOG1aSXpjWXppWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGM1YjIwNGQtY2NjNy00Y2JhLTg1N2UtZmM4OGE1Zjg3MzIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDE1MixcbiAgICAgIDI0MyxcbiAgICAgIDI0MyxcbiAgICAgIDIwOSxcbiAgICAgIDcxLFxuICAgICAgMTU0LFxuICAgICAgNTIsXG4gICAgICAyLFxuICAgICAgMSxcbiAgICAgIDE3NixcbiAgICAgIDExMixcbiAgICAgIDM3LFxuICAgICAgMTYyLFxuICAgICAgNDQsXG4gICAgICAxODgsXG4gICAgICA5NSxcbiAgICAgIDQ3LFxuICAgICAgMTU5LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMjM0LFxuICAgICAgNDEsXG4gICAgICAwLFxuICAgICAgNjQsXG4gICAgICAxNzgsXG4gICAgICAxNzgsXG4gICAgICAxMDUsXG4gICAgICAxMzYsXG4gICAgICAxNzEsXG4gICAgICAxNzksXG4gICAgICA5NCxcbiAgICAgIDEzNyxcbiAgICAgIDg2LFxuICAgICAgMTc3LFxuICAgICAgMTMxLFxuICAgICAgMTI4LFxuICAgICAgMTM2LFxuICAgICAgMTc5LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQU5QUEVCNlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTU3MzcyNDQ6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MDcxMDMxMDU4MDI3Mjo5MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOU1E2UGtERUpuRG43VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktZVHF4cTJ3bER5N252c2NjTXpqN3N0K0NpY1hNVHArK3N1S2NGR2FFaE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUJOSTd2QnNIQWpWN0RMWFBhZXVkNjZBRkRnWDJOQ2VpelFBM3gvbGNoZjZMbTVqZ0pIVGp2YWRWWXVZbStGWnp6VnQ3NU93aE1wZ1hrYlUxV0w2RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ0QrYXpjM1RPd2VXVVozRW52SzkxNkRDS1ZMOCsxQ2tpVU5Qc3g4T1ZmMHpQalJaMVZEdGswVEZqYkJEWnFnQ29TRFh2U2tBcCt6TnFvU3pyZTZ0QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NTczNzI0NDo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNzgzMDJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
