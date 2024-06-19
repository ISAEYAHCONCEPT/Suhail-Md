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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_32_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYyLFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRJTDBEdEoyR0pZdXZPYTFtNW1LUnUwd3VLM09aWTA1clhwYzdXTHV0RDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZpMkFBS21hUzdDOVRQQlR2UmZlSFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2M4OGQ0MzQtOThhNy00ODMwLWI2N2UtYWM4YTQ5YmMxM2MzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDYsXG4gICAgICAxMDUsXG4gICAgICAxMTYsXG4gICAgICAxNTYsXG4gICAgICA1MixcbiAgICAgIDE5OCxcbiAgICAgIDExMSxcbiAgICAgIDIzNCxcbiAgICAgIDEwMixcbiAgICAgIDI1MyxcbiAgICAgIDIzMSxcbiAgICAgIDEwMCxcbiAgICAgIDEwMixcbiAgICAgIDE2LFxuICAgICAgMTY2LFxuICAgICAgMjYsXG4gICAgICA2LFxuICAgICAgMjMsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgNDIsXG4gICAgICAyMTUsXG4gICAgICAyNTIsXG4gICAgICAxMCxcbiAgICAgIDI0NixcbiAgICAgIDEyOSxcbiAgICAgIDE4NSxcbiAgICAgIDk4LFxuICAgICAgMjMyLFxuICAgICAgMjM1LFxuICAgICAgMjM3LFxuICAgICAgMTA1LFxuICAgICAgMTY5LFxuICAgICAgMTA2LFxuICAgICAgMTUzLFxuICAgICAgNjQsXG4gICAgICAyNTQsXG4gICAgICAyMzMsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlY3RVRFTFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTU3MzcyNDQ6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIkSXNhaWFoXCIsXG4gICAgXCJsaWRcIjogXCIyNTA3MTAzMTA1ODAyNzI6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2ZVdy9JSEVQM2F5Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6cldGSmFqeWp3WTdYRCswdGxHMWp3Z0x2UWdCazEvYm9LOXBTdVk1c2pBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlQyVS9GZ00yTFAwaFg2TGMwbG1FSkFZMjhzTDlNaDdQd1piYkZCOVM4MWhjcHFYcjdBSXFZb24zTGFVVTFlTTJBM3dKYTVhRGllRjJwUnUrUWFnVENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFwUlpnOEZrQzZjMDNZTmdxNzV3dkE5WnF1eWVyeWxhSVZwNVY2TlhzcEp5eUlNWmNOTTg5cmhIdDB6R2NMU09ndjdVREFOWCtZVTRvY2lyN0xWZENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTU3MzcyNDQ6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3NzUxNzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
