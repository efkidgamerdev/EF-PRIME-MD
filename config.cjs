// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUgxQXFaQ3hWMCtBbnh5U0VMVUFzTlBPUHd0TEx1UXdqaVFHeEx4R0huWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDdFelRGc1RySEVPSGl0TmRDNkV4dzNrZlJESTBzOUJmMlhIbno0Y3hSOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRi9lTlNzWmYvbWRBM1J3NXFnRmF0bEhBMnB1d1ltZzdCaGo3U3pxTWxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRUgwdWZCekRSRmU3NGc1cWZNdjQrdGZNNDJQTm1FQmZQR3BQVHFOSmtrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDeHd0Zk1iNVJ6SEJ3RU1ONEhJVk9aMXRub2Z4UHZUZkJKOFk3eldlRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFlWTc1dVZtNWliclgvL2h2N1ZsblN4cUs0S0xjMEFua01LeCtlR2VQUzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1WWlhBTnUwRlFzaG1WTUlTcHh1NkZEWlFZQ05lM25Da2pzVUZndGEzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVZnRlhPcXNnNmZPUWJodVNNM01QZWxaT1ZhYUsrK2JtQkhZZ3I4OUpSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRleGhaOXFSZ1pQUDhFQytmZDRlZS9QZFE0bEJVTm91by9QVHpxZDM1TkVySlVhbmVYUG9yNGtNM2RvaTlaMEZ6akdLclJGTjN0NDZiSXc1Z3RCUGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJ1WkVNdFhLci80WUR4a29wb1Y4eTYvbFhkdGMrczlKWVlQK3hBTXpNSmNNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwODUwNDY4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjMwODI1ODczQTg1Nzk2OURDNDg2RjAwNTExQzA0MUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjU2NjA4MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaTlaWHBwSVVSd1NMcXhEaG8tMXVYZyIsInBob25lSWQiOiI1ZTliNzg2OS1kZDZhLTRkMjQtYmE1Zi0zNzQ1MjVjYTVkNjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnZJYjdEMnMwamFWUDc5QlZQb2FJTnUzS21ZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5oTVBwRkh0a1VENnZQVC9Ea05UOE8zQnVjMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOWVBRUVZTMSIsIm1lIjp7ImlkIjoiMjM0ODA4NTA0Njg3NDo2NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEQwdU53QkVLajM2Y0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiLzBFWk1ZQkJQZEtHbE1yU0lWbzlsZG92Q1ozcUJKWlB1VjBuTCtTUnJYVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRTJONHJnRUlMQ3FNQU5CZGNBNDdTa1pLK0hwMXJLTFVlWnpzQ2VPWEpUaHB1UVRlaVpQMlFhTCtJZXNpNURBaHMySTZ1ZmR3L2N0VndyMytIMzFLQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InpldXhBMmw0T3BOTEhXb2ZTVThjcXNJbnh1U1ZNZXBqRUZ5cWdwVERJRkZJQjJwcVBiNEdFWXUwOCtxd3pKWWFWV2ZMSHhTek44TTh1S3VZL2IxQmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA4NTA0Njg3NDo2NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmOUJHVEdBUVQzU2hwVEswaUZhUFpYYUx3bWQ2Z1NXVDdsZEp5L2trYTExIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2NTY2MDcwfQ==",
  PREFIX: process.env.PREFIX || '*',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : true,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "_*ISAAC FAVOUR*_",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348085046874",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
};

module.exports = config;
