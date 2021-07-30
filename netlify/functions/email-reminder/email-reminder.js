const nodemailer = require("nodemailer");
const { client } = require("../harperdb-connection");
const axios = require("axios").default;

const dotenv = require("dotenv");
dotenv.config();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: process.env.SEND_IN_BLUE_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SEND_IN_BLUE_USER,
    pass: process.env.SEND_IN_BLUE_PASS,
  },
});

const statusMapper = {
  not_started: "Not Started",
  in_progress: "In Progress",
  completed: "Completed",
};

const handler = async (req) => {
  const bodyRes = req?.body ?? "{}";
  const body = JSON.parse(bodyRes);
  if (body.uniqueCode !== "12345") {
    return { statusCode: 401, body: "Not Authorized" };
  }
  try {
    const opt = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.CLERK_API,
      },
    };
    const userList = await (
      await axios.get(`https://api.clerk.dev/v1/users`, opt)
    ).data;
    for (let index = 0; index < userList.length; index++) {
      const user = userList[index];
      const options =
        "select status, COUNT(status) as total from goalsVine.goals " +
        "WHERE user_id='" +
        user.id +
        "'" +
        "GROUP BY status";
      const res = await client.query(options);
      const resData = res.data ?? [];
      const finalProcessedData = {
        not_started:
          resData.find((el) => el.status === "not_started")?.total ?? 0,
        in_progress:
          resData.find((el) => el.status === "in_progress")?.total ?? 0,
        completed: resData.find((el) => el.status === "completed")?.total ?? 0,
      };

      const emailId = user.email_addresses.find((el) => el).email_address;

      const htmlContent = `
   <section
   style="
     padding-top: 20px;
     padding-bottom: 20px;
     margin: 0 auto;
     text-align: center;
     background-color: #f8f9fa;
   "
 >
   <h2>Hello there! 👋🏻</h2>
 
   <div style="padding: 20px; background-color: #fff; width: 800px; margin: 0 auto;">
     <h1 style="color: #3f51b5">Do you remember me?</h1>
     <h2>You created me to shape you! 😀</h2>
     <p>Here is the stats of your goals.</p>
 
     <div style="margin-right: 0px">
       <div
         style="
           width: 200px;
           height: 150px;
           margin-right: 20px;
           color: #fff;
           background-color: #3f51b5;
           display: inline-block;
         "
       >
         <h2>Not Started</h2>
         <h1>(${finalProcessedData.not_started})</h1>
       </div>
       <div
         style="
           display: inline-block;
           width: 200px;
           height: 150px;
           margin-right: 20px;
           color: #fff;
           background-color: #3f51b5;
         "
       >
         <h2>In Progress</h2>
         <h1>(${finalProcessedData.in_progress})</h1>
       </div>
       <div
         style="
           display: inline-block;
           width: 200px;
           height: 150px;
           margin-right: 20px;
           color: #fff;
           background-color: #3f51b5;
         "
       >
         <h2>Completed</h2>
         <h1>(${finalProcessedData.completed})</h1>
       </div>
     </div>
     <p style="margin-top: 10px">
       <a href="http://goals-vine.netlify.app" target="_blank">Click here</a> to
       update your goals!
     </p>
 
     <hr />
     <h2 style="margin-top: 20px; text-decoration: underline">
       Here is the motivation quote for you:
     </h2>
     <p>If there is no struggle, there is no progress.</p>
   </div>
 </section>
`;

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Goals Vine 👻" <no-reply@goals-vine.com>', // sender address
        to: emailId, // list of receivers
        subject: "GoalsVine - Do you remember me?", // Subject line
        html: htmlContent,
      });
    }
    return {
      statusCode: 200,
      body: "sent",
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: error.toString() };
  }
};

getDataByStatus = (res, status) => {
  return res?.filter((item) => item.status === status);
};

module.exports = { handler };
