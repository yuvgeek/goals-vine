const { client } = require("../harperdb-connection");

const handler = async (req) => {
  const { user_id, id } = { ...JSON.parse(req.body) };

  if (!user_id || !id) {
    return { statusCode: 500, body: 'required fields are missing' };
  }

  const queryDelete =
    "DELETE FROM goalsVine.goals " +
    "WHERE user_id='" +
    user_id +
    "'" +
    " AND id = '" +
    id +
    "'";

  try {
    const res = await client.query(queryDelete);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {

    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
