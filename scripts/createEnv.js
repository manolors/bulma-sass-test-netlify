// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const fs = require('fs')
console.log(process.env)
fs.writeFileSync('./.env', `SECRETO=${process.env.SECRETO}\n`)