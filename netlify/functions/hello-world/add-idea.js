// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const harperive = require("harperive");

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  schema: "ideasVine",
};

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

const options = {
  operation: "insert",
  table: "ideas",
  records: [
    {
      name: "Hey",
    },
  ],
};

const handler = async (event) => {
  try {
    const res = await client.insert(options);
    console.log(res);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
