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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347015466209";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBSKzhWbHgraDN0TVB5VEdwOE9rc0VKcTBQVkc1YmRiaERML1dGREgvblU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxNTQ2NjIwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0E3QTc2RUQzMjk3MUQ4OEM1RDZFNTZDQUY5MTNENDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTcxMzA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkppRERralRnVGNlYVpCRnRGa2RkeXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTk0ODRkOGQtMGUzMy00NzFkLTg0MjktNWY5MmUxNmI0MWEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDIwOCxcbiAgICAgIDE3MSxcbiAgICAgIDU5LFxuICAgICAgMTMyLFxuICAgICAgMjM3LFxuICAgICAgMjQzLFxuICAgICAgMTE4LFxuICAgICAgMjU1LFxuICAgICAgMjM1LFxuICAgICAgMyxcbiAgICAgIDE2NixcbiAgICAgIDYyLFxuICAgICAgNzQsXG4gICAgICAxMTksXG4gICAgICAxNDEsXG4gICAgICAzNyxcbiAgICAgIDExLFxuICAgICAgMTQ2LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMjE5LFxuICAgICAgMTY0LFxuICAgICAgNzIsXG4gICAgICAxODEsXG4gICAgICAxMTksXG4gICAgICAxMjQsXG4gICAgICAxMjksXG4gICAgICA4NyxcbiAgICAgIDE2MyxcbiAgICAgIDIyNSxcbiAgICAgIDM1LFxuICAgICAgNzcsXG4gICAgICA5MSxcbiAgICAgIDIzMyxcbiAgICAgIDIxMixcbiAgICAgIDQ1LFxuICAgICAgMTkxLFxuICAgICAgMyxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSMzc1TlBLSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNTQ2NjIwOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSVNBRVlBSENPTkNFUFRcIixcbiAgICBcImxpZFwiOiBcIjcyMTI1ODU1NjAwNzM5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWFMbE9RRUVKLy9tTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTM0p4em14dHUrblNmK0EvYmdDOVhwWGNGNDNqN0ZPODNtOHdHQ2hnOVMwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlE5aisvRi8rczRkanBZbXBpZ3NINnpzUzh6TDRublhuSVlTQTBxMVNRVVI2a1NGQnNmcFlHR2pmbko1UHpHYmZRRTRHRkUxY3p3TkFNakwxa1BVbERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxWeTY0WHVHaWR5QTFGQzFJaTRMNVBVbWRGcUpobDFlOHMrV0loUjJISHRkRE41WjFndGFNNG5CZGlIaXAvaEo2Ty9sTzltdHRoUy9hUmpPUkZSZEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTU0NjYyMDk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE3MTI5OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
