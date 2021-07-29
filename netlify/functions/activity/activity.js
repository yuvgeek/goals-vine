const { client } = require("../harperdb-connection");

const options = {
  operation: "insert",
  table: "activities",
  records: [],
};

const handler = async (req) => {
  try {
    const params = {
      ...options,
      records: [{ ...JSON.parse(req.body) }],
    };
    const res = await client.insert(params);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
