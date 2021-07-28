const { client } = require("../harperdb-connection");

const handler = async (req) => {
  try {
    const params = req.queryStringParameters;

    const options =
      "select goal.*, category.name as category_name from goalsVine.goals as goal" +
      " INNER JOIN goalsVine.categories AS category ON goal.category_id = category.id " +
      "WHERE goal.user_id='" +
      params.user_id +
      "'";
    const res = await client.query(options);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
module.exports = { handler };
