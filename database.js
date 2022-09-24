import dotenv from "dotenv"
import mysql from "mysql2"
import Joi from "joi"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import DB from './db.config'

dotenv.config()

const validateSignup = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().required().label("firstname"),
    lastname: Joi.string().required().label("lastname"),
    email: Joi.string().email().required().label("email"),
    password: Joi.string().min(6).required().label("password"),
  });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};




export async function loginUser(data) {
  try {
    const { error } = validateLogin(data);
    if (error)
      return error.details[0].message

    const [user] = await DB.query(`SELECT * FROM users 
      where email = ?`, [data.email]
    )
    if (!user[0]) {
      return { message : "account does not exists"}
    }
    else {
      const validPassword = await bcrypt.compare(
        data.password,
        user[0].password
      )
      if (!validPassword)
        return {message:"Invalid Email or Password"}

        const token = jwt.sign({email: user[0].email}, process.env.JWTPRIVATEKEY,);
        console.log(token)
      return ({ "data": token, message: "logged in successfully" })
    }
  }
  catch (error) {
    return { message: error }
  }
}

export async function allData() {
  try{
    const [result] = await DB.query(`SELECT * FROM gps_locations; `
    )
    console.log(result)
    if (result[0]) {
      return result
    }
    else {
      return { message: 'device_id does not exits'}
    }}
  catch (error) {
    return { message: error }
  }
}



export async function deviceData(data) {
  try{
    console.log(data)
    const [result] = await DB.query(`SELECT * FROM gps_locations 
    where  Device_ID = ?`, [data]
    )
    console.log(result)
    if (result[0]) {
      return result
    }
    else {
      return { message: 'device_id does not exits'}
    }}
  catch (error) {
    return { message: error }
  }
}



export async function addUser(data) {
  const [result] = await DB.query(`SELECT * FROM users 
  where email = ?`, [data.email]
  )
  if (result[0]) {
    return {message :"email alreay exists "}
  }
  else {
    const { error } = validateSignup(data)
    if (error)
    return error.details[0].message
  }
  return  (await createUser(data))
  
  
}

async function createUser(data) {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashPassword = await bcrypt.hash(data.password, salt);
  
  await DB.query(`
  INSERT INTO users (firstname, lastname, email, password)
  VALUES (?,?,?,?)`, [data.firstname, data.lastname, data.email, hashPassword]
  )
  console.log(data)
  return "user added successfully"
}








