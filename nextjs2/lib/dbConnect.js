import mysql from "serverless-mysql";

const db = mysql({
  config: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
  },
});

const excuteQuery = async ({ query, values }) => {
  try {
    const results = await db.query(query, values);
    await db.end();

    return results;
  } catch (err) {
    return { err };
  }
};

export default excuteQuery;
