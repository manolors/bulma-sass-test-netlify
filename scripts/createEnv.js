const fs = require('fs')
fs.writeFileSync('./.env', `SECRETO=${process.env.SECRETO}\n`)