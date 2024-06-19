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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_40_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICA0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsNk1wNXlsNDRSKytlU3dXT08yNEZtaWg0bnNCUTdnL1YrVGRMUU03WjBBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrZk5NWmJDR1JVZVlkcExLdURBdm9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExYjY0NWQ4LTFjODctNGE4My04N2ZlLWM4ODExNDg0ZWRiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDIwLFxuICAgICAgMTA4LFxuICAgICAgNzMsXG4gICAgICAxMTMsXG4gICAgICAxODUsXG4gICAgICAxMDYsXG4gICAgICAxNTUsXG4gICAgICA1MixcbiAgICAgIDEwMyxcbiAgICAgIDE1MSxcbiAgICAgIDEwMCxcbiAgICAgIDI0MSxcbiAgICAgIDIzMixcbiAgICAgIDE0MCxcbiAgICAgIDE5LFxuICAgICAgODYsXG4gICAgICAzOSxcbiAgICAgIDE0MyxcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxODUsXG4gICAgICAxNjEsXG4gICAgICAxODEsXG4gICAgICA0NCxcbiAgICAgIDEwNSxcbiAgICAgIDEwNyxcbiAgICAgIDMyLFxuICAgICAgMTc3LFxuICAgICAgMjU1LFxuICAgICAgMTcsXG4gICAgICAxNDcsXG4gICAgICAxODIsXG4gICAgICAyMjcsXG4gICAgICAyMzAsXG4gICAgICA1NyxcbiAgICAgIDEzOSxcbiAgICAgIDE0NixcbiAgICAgIDIxOSxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRUS0NISzhMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU1NzM3MjQ0Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiJElzYWlhaFwiLFxuICAgIFwibGlkXCI6IFwiMjUwNzEwMzEwNTgwMjcyOjc5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmVXcvSUhFT2l5eXJNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwienJXRkphanlqd1k3WEQrMHRsRzFqd2dMdlFnQmsxL2JvSzlwU3VZNXNqQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4QlhLRW9MV2ZaSW8xRTdDVFA2RUNWWndhK1Vxdk1HdWxpWmtnMS9HNGYyVXZKRnlWYzF0QnFCcnJ1QnQ4amtyZ2xmTkpPNHJiMlNFY2JSUWJCUEVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIOXIycXY3T2JiQmVDd2ZXNXMzSVNkNzdPSnN3N0NzWmJDc0RjQTZxd1lzZzlaWnNaWGFZQjF6K2hHZWd4K3IzbW95VEJsaDRPeXZnbm9WNlpMNlpBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1NzM3MjQ0Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Nzg2NDEzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
