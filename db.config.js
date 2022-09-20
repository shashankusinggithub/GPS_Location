import dotenv from "dotenv"
dotenv.config()
import mysql from "mysql2"

const DB = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
}).promise();

export default DB
