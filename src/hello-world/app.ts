import { APIGatewayEvent } from "aws-lambda";
import * as mysql from "mysql2/promise";

let response;

const connection = mysql.createPool({
  host: "49.236.146.45",
  user: "mavenir_dev",
  password: "mavenir!@#$",
  database: "mavenir",
  port: 13306,
});

export const lambdaHandler = async (_: APIGatewayEvent) => {
  try {
    // const [row] = await connection.query(
    //   "SELECT * FROM tbl_product WHERE pr_id = 125"
    // );

    // console.log(row);

    // connection.end();

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world2",
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
