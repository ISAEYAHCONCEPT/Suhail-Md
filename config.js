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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICA0MixcbiAgICAgICAgMzksXG4gICAgICAgIDI1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVldHhYQ1FMMFJOTG9YbnhmY28xRWU5RnQ5RjlNRW1OOXN2N1hZc3JHT0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldSNnJqUHNjU0dlSFhHS3ZORDdzWlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI2MWU4NzgtZGM4NC00MzJlLTg2NGQtNmUzMmZlMzU3NmEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMTM4LFxuICAgICAgMTY5LFxuICAgICAgNTksXG4gICAgICAxOTcsXG4gICAgICAxNjksXG4gICAgICA4NixcbiAgICAgIDExMyxcbiAgICAgIDI0OCxcbiAgICAgIDMxLFxuICAgICAgODUsXG4gICAgICA3MSxcbiAgICAgIDExMCxcbiAgICAgIDEwLFxuICAgICAgMTMsXG4gICAgICAxMjYsXG4gICAgICA0MyxcbiAgICAgIDEyNyxcbiAgICAgIDEwMyxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICA2MixcbiAgICAgIDE1MSxcbiAgICAgIDEyMSxcbiAgICAgIDE4MCxcbiAgICAgIDEsXG4gICAgICAyMzYsXG4gICAgICAyMTQsXG4gICAgICAxMjMsXG4gICAgICA4OSxcbiAgICAgIDIyMyxcbiAgICAgIDE3MSxcbiAgICAgIDUzLFxuICAgICAgNDksXG4gICAgICAxOCxcbiAgICAgIDE2NixcbiAgICAgIDIyOCxcbiAgICAgIDE4MixcbiAgICAgIDI1LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFONkZRRlI2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU1NzM3MjQ0Ojc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiJElzYWlhaFwiLFxuICAgIFwibGlkXCI6IFwiMjUwNzEwMzEwNTgwMjcyOjc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmVXcvSUhFSk9PeXJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwienJXRkphanlqd1k3WEQrMHRsRzFqd2dMdlFnQmsxL2JvSzlwU3VZNXNqQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjRlY2NXhnenRydUVHcS9lRWhzNFFnNkNUUlJWZUxYcEFtaXMvanI1N0Qwd0llYzhSQXJDK1NnT2hNSDFjRHVRZG4wOGd3VGpmbW05MmxoN25oWnpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBRFpaMHFVWU1aQmhBZUVLRmhScG53L0t3VFlINWpDOGgrZjE4MCtEOS80SFc5dWlwak11RFk3Mk5lNk12b3pvM1hsdWI3SmhaR0tvQmhGRGR2YnNDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1NzM3MjQ0Ojc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzgxNzIwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
