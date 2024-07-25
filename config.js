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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_18_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRVpuQzZUM0ZLMk1hODNobTRWeTdlTlpqdDVjMzFTOUx0TlVaZktndTIrRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU1NzM3MjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RjU2MTUxQjczNTg3QjQwN0MyNkU0MzkzNDc5MTU1Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5MDI3MTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnRrRDdWNXFSVi1yQXlIb2FkNmZKd1wiLFxuICBcInBob25lSWRcIjogXCI4M2NjZDNlZC05ZDY0LTRhZTItOTBkYy05YTg1MmEyNjAzZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMixcbiAgICAgIDE5OCxcbiAgICAgIDgxLFxuICAgICAgNTQsXG4gICAgICAyMTMsXG4gICAgICAxMDYsXG4gICAgICA2OSxcbiAgICAgIDM3LFxuICAgICAgNjYsXG4gICAgICA4NixcbiAgICAgIDcsXG4gICAgICAxMTksXG4gICAgICA4LFxuICAgICAgMTc3LFxuICAgICAgMTk4LFxuICAgICAgMjU0LFxuICAgICAgMjQyLFxuICAgICAgMjA3LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDE3NyxcbiAgICAgIDE1OCxcbiAgICAgIDI1MSxcbiAgICAgIDE1NSxcbiAgICAgIDExLFxuICAgICAgNjMsXG4gICAgICAxMDUsXG4gICAgICAxMDAsXG4gICAgICAyMzUsXG4gICAgICAxNDAsXG4gICAgICAxMDksXG4gICAgICAxMDYsXG4gICAgICA4LFxuICAgICAgNzYsXG4gICAgICAxOTYsXG4gICAgICA5OSxcbiAgICAgIDE4MixcbiAgICAgIDI0OCxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXNjlCVDVaQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NTczNzI0NDo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUwNzEwMzEwNTgwMjcyOjg5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05PUTZQa0RFT3JNaUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS1lUcXhxMndsRHk3bnZzY2NNemo3c3QrQ2ljWE1UcCsrc3VLY0ZHYUVoTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiRVZmc2hHSWxVUWlkdUFWc1EveGZhSXhBWkI2T1lRU1ptSTZrTGVCOHNyblYyT3k3OHIxM0pqQ3B5RWFuV0dham5lT3hXRjhiQjZuMVBhaW16SHZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNMXVMZFpKTmdVNEgrUUNtTkFUaTNzOGt3MlBIYUxzUXZKUXRKaGlMUERBTFFwa1pwT2JTMXdYOTcza1hyT3B6OWVDcHFyWWdUQmhjT0JXaXNmNThqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1NzM3MjQ0Ojg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkwMjcwN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
