import dotenv from "dotenv"
import mysql from "mysql2"
import express from "express"
import joi from "joi"
import passwordComplexity from "joi-password-complexity"
import jwt from "jsonwebtoken"

const app = express();
dotenv.config()



const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),		
	});
	return schema.validate(data);
};


const DB = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
}).promise();


export async function addUser(data){
  const [result] = await DB.query(`SELECT * FROM users 
  where email = ?`, [data.email]
  )
  if (result[0]){
  console.log(result[0])
  return 
}
  else {
    console.log("not ")
    addUser(data)
    return data
  }
}

export async function createUser(data){
  const [result] = await DB.query(`
  INSERT INTO users (firstname, lastname, email, password)
  VALUES (?,?,?,?)`,[data.firstname, data.lastname, data.email, data.password]
  )
  return 
}

const temp = {"firstname":"abscs","lastname":"descsc","email":"shahmakcom","password":"rinkuj05"}

const result = await validate(temp)

app.get("/", (req, res) => {
  res.json(result)
})

app.listen(8080, () => {
  console.log("connected1s")
})



