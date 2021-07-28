const { client } = require("../harperdb-connection");
const options = {
  table: "ideas",
  searchAttribute: "visibility",
  searchValue: "public",
  attributes: ["*"],
};

const handler = async (req) => {
  try {
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
