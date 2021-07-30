const { client } = require("../harperdb-connection");
const axios = require("axios").default;

function getInParallel(apiCalls) {
  let functions = apiCalls.map((apiCall) => apiCall());
  return Promise.all(functions).then((response) => response);
}

const handler = async (req) => {
  try {
    const options =
      "select user_id, COUNT(user_id) as total from goalsVine.goals WHERE status = 'completed' GROUP BY user_id ORDER BY total DESC";

    const res = await client.query(options);
    const promises = [];
    // console.log("res", res);
    const isRecordExist = res.data?.find((el) => el.total > 0);
    if (isRecordExist) {
      for (let index = 0; index < res.data.length > 0; index++) {
        const element = res.data[index];
        // console.log("e", element);
        const opt = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + process.env.CLERK_API,
          },
        };
        promises.push(
          axios.get(`https://api.clerk.dev/v1/users/${element.user_id}`, opt)
        );
      }
    }

    try {
      const fullRes = await Promise.all(promises);
      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];
        const clerkUserInfo = fullRes[index]["data"];
        element.full_name =
          clerkUserInfo.first_name + " " + clerkUserInfo.last_name;
      }
    } catch (err) {
      console.error(err);
    }
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
module.exports = { handler };
