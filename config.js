const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94789549564"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94789549564' 
global.devs = '94789549564';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/Nimesha-whatsapp-bot-03-21'
module.exports = {
  sessionName:  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFMOXBVQkM0dlg3dDhOTDNYci9DUHdwcEw2YW9oME9VMnU4cHZlYWcyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpyWEFsOFN3dDZSSytBUkZ6V25nNXpuWDRpTmNvcmIzcXpjWTkrQk5IRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRjd1RWJPNGhWNlpDenpPelhqcHJOWUhOaDdocWxzaDBYQ1pVd1BrcUdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5S1MyN0NaM0QrTFJEWllxU0kyYnR5bGhSMkZvWGRydGdmS0hSREtEb0JFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBc204Z3NCTXRuemxRM1ROaXJ0QVlmZ2pTWGV3ZVdEaFhaQ0JmNDNFMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhkazVGVlFlNkxGRUlhamQrcXNseXA0ZjRQV0pzOUwwUGl0b3E4RGx2MEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BhRmxOczk2Sy9OaWd3VEhHTkhQbVprY3NadFVQNjBsUitvUllWUWlHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTBKMjNWQXlXU2R5MXhBNFY5QmNmYkVvZzIzMC9YZ0NpUVI4MzZvWjdSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx5c0d2ZE5pRnZXWmJSR2xIUmNxOFBwSnFYVEFWazNtNnA1SW1uWHlRbnUrTnJoTXQ1d3R6WE9KWWdVWEJzNXlReFpvRzF0ZDNuN1ZrblA0cmVHdEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiIxOFJheFFZRk1tV25FTTYyamJZWm9SeEFwQjZ3ODJGSVJuczZMNGdJRlpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLZ3FtRlduSlN2dWdJVnlkMW5ORDhnIiwicGhvbmVJZCI6ImQyM2MyNzBlLTVlODItNDg4Yi1iMzdiLTRkNTk2MTY1YzdhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0bE1KWWdrZGhrWlN3VitBZzI5ZUdLdjBaaGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVVXcWV4MUp5Ri9BYmlMcitkWS93eEdtdGFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY0SDYxSkxNIiwibWUiOnsiaWQiOiI5NDc4OTU0OTU2NDoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLinaTvuI/inYDinYPwn5iB4oG/4oGx4bWQ4bWJy6LKsOG1g/CfmYPig5/bneKDn8ylzKnMqcypzKXMqcylzZrMriJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1M2cFlJQ0VJM3U4SzhHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSitOQkIxdFRMV1JHdGRjakJtbmRHVlZ3amRnS0NBVzE1MzF2ODBUZE5DRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaTJFbjFLWHFlWVBtc2tjdGh0MjU1dGJWbUNxblNpMnJPWno0c0RBOHlWOXdWL1Q3UVpXbjBRZW1pQ1hSM2pNdGtsYWpKQXB4MS9FZ0JqQWcxUE55Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6IlAvaWFxMCtCTkhRNmFaWEhTVWNBSWpKWnI3U3VoWHVBaGlvME9wMzI1ZU95ekVLWEEvbnhxakxzVnRHemphYm9QaklhVW9KNkRwNTRtQmFlcXM2WkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODk1NDk1NjQ6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2ZqUVFkYlV5MWtSclhYSXdacDNSbFZjSTNZQ2dnRnRlZDliL05FM1RRaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMTAyNzk4NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHV3AifQ==" ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'NIMESHA WHATSAPP BOT',
  packname:  process.env.PACK_NAME || 'NIMESHA WHATSAPP BOT',
   
  botname:   process.env.BOT_NAME === undefined ? "NIMESHA WHATSAPP BOT" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'NIMESHA' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.,' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI @user I'M NIMESHA WHATSAPP BOT' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
