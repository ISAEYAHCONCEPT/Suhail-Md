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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_57_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSDM3NkdSdEJUeTJSNlh3MjQ0UXBnQjlvN2x3ZlBUa2tjOWRMR0JxRFZWZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX3N5TllRUkVRbzZXUThld1QyMHRMQVwiLFxuICBcInBob25lSWRcIjogXCIzZjY0MWM4ZS01MGFiLTQwMDAtODFjNi1kODg5NmZkODA2YTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMjQsXG4gICAgICAxNzEsXG4gICAgICAxODcsXG4gICAgICAyMTQsXG4gICAgICAyMDQsXG4gICAgICA1NCxcbiAgICAgIDIyNyxcbiAgICAgIDE4MixcbiAgICAgIDE1NCxcbiAgICAgIDEzMyxcbiAgICAgIDExNyxcbiAgICAgIDIzNSxcbiAgICAgIDkyLFxuICAgICAgOTksXG4gICAgICAyMDIsXG4gICAgICAyMTcsXG4gICAgICAxMzEsXG4gICAgICA0MSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDU3LFxuICAgICAgMTk5LFxuICAgICAgMjU1LFxuICAgICAgNjAsXG4gICAgICA2NCxcbiAgICAgIDczLFxuICAgICAgNDAsXG4gICAgICAxOTQsXG4gICAgICAyNyxcbiAgICAgIDE0NCxcbiAgICAgIDI0NyxcbiAgICAgIDY1LFxuICAgICAgMTM4LFxuICAgICAgMjQxLFxuICAgICAgMTk4LFxuICAgICAgMixcbiAgICAgIDE2NixcbiAgICAgIDU5LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlYyOEFBUzUzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU1NzM3MjQ0OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiJElzYWlhaFwiLFxuICAgIFwibGlkXCI6IFwiMjUwNzEwMzEwNTgwMjcyOjgwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmVXcvSUhFTUdvemJNR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwienJXRkphanlqd1k3WEQrMHRsRzFqd2dMdlFnQmsxL2JvSzlwU3VZNXNqQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0SlI4cFFXRGh2L2xFQlVPZU9McjJYekdvSDZ4NU5YQkYzM2FGZTROa216ZWpHOGs4bGI1Y1I3UWM4RXVrc3M1TGs4MXpxUDZ0bGJYOVZSUGtDaEJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCZnAreHI2UWdUKzYzL2lTbkpWcmpFbG1CR2Y2SUFta3RrTHUwSkNuRVZRbWo0Nks2YVUxUEZMZUFsQ0dPMGZMRDlkNWlvUWJiRG9qWEx4T0NvUmhqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1NzM3MjQ0OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODM0MjQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEVaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMRVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDRDFDVGcvMnY5WFd2bElialR5ZXlwcmliQkpVSFB3b0hDb3ZtNmRPRWdnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTkyMzIwMzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzE4Nzg3NTI2MTc5XCJ9Igp9"  // PUT your SESSION_ID 


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
