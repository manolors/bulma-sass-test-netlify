// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const env = require("dotenv").config();

const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}!`, lala:`lala`, env: JSON.stringify(env), processenv: JSON.stringify(process.env) }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
