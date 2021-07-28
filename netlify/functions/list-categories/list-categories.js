const { client } = require("../harperdb-connection");

const handler = async (req) => {
  try {
    const params = req.queryStringParameters;
    const options = {
      table: "categories",
      searchAttribute: "user_id",
      searchValue: params.user_id,
      attributes: ["*"],
    };
    const res = await client.searchByValue(options);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
module.exports = { handler };
