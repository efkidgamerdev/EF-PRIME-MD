// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZTeEFFZ0JpMGtZeGtKSFNzYjFJTUxvS2plTzBnaisydHFZdk9nei8yND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWVZbWxKZDJjM1FIUnpDZGwrTWZqbnJHMERRK3BjbE1NMktibHpzd1FWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT29pM1ZlT25BYVhhZ0pucDh4amxsNEN3OXNYSW01Mmt3empNNDBQOEcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RHpNYXE3cndKaGwyRllQU015MDBKZldseFBwdDJKcFJDT1FTUm4xRG1JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMRkFMNHJkY21VRWJMRXJaTDlVNDBwUTBhVlhYUmFzL2RFOGVTT3N3M3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklzZHcvZGs4SkZ6dGdzNlhCT0lJaTNmUkpmeGlFSXRNeTlXZ1Z1NUg0eGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05IY0dJc0ZoQmxGWHptK2ZVa2JuSSt1aUpZM2t2SzdOOWwyOEhXdjJXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnptRVNxMW5NbmJ0M3NHR0gzTkkwZC9NUU1tQnFGWlJCellydFdmY3lFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwraUNqbEx3Z2lEZldLS25TNXR6ZzJ3QmpTR1J0clZVUlNSMG01T1Y5WjRXWWx2ZUJNdSswekhkNG10TlRMYjhETVFXbUhHYlkwbEJyaVpNMEc4UmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJzTFF0djRsZ1piTWRuVjJHWWRnZU1JcW1EdkZ1MnFEZWFOdWxJMmRzVVNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2MDczNTcyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRkQ4QkE0MzJGNzU2Qzk3NDlCMjg0N0U2MzgzMzg5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2Nzk3NDM5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGOUZuZ3NwTlNrQ0gtV1M0RnYwV1VBIiwicGhvbmVJZCI6IjE5MDNmMTVhLWEwZWQtNDkyNi04MDU4LWFiMjMyNWU3NjRiNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEeUJsU0ZCNmo1aGdTaFFFYnhiRVJQOGFYbWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1Z4TXREdE5xeElzUUZIRGMzZmZBbGpqMEtNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJMWUZXWlZCIiwibWUiOnsiaWQiOiI5MjMzNjA3MzU3MjM6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPayJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkRoZ2UwSEVQQ0crTUFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaTVYVytaYkV5QWJwMWFTVGVhMU9CYXRyN3E5RHU4S0U3MmxvMXAyRjJ4VT0iL",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "Frank kaumba",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923360735724",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
