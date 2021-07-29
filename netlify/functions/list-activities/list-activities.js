const { client } = require("../harperdb-connection");

const handler = async (req) => {
  try {
    const params = req.queryStringParameters;
    const options =
      "select activity.action, category.name as category_name, goal.name as goal_name from goalsVine.activities as activity" +
      " INNER JOIN goalsVine.categories AS category ON activity.category_id = category.id " +
      " INNER JOIN goalsVine.goals AS goal ON activity.goal_id = goal.id " +
      "WHERE activity.user_id='" +
      params.user_id +
      "'";
    const res = await client.query(options);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
      console.error(error);
    return { statusCode: 500, body: error.toString() };
  }
};
module.exports = { handler };
