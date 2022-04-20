// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import dotenv from 'dotenv';
dotenv.config();

const fs = require('fs')
fs.writeFileSync('./.env', `SECRETO=${process.env.SECRETO}\n`)