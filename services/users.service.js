import Joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import DB from "./db.config.js";

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
    password: Joi.string().required(6).label("Password"),
  });
  return schema.validate(data);
};

async function loginUser(data) {
  try {
    const { error } = validateLogin(data);
    if (error) return { http: 400, message: error.details[0].message };
    
    const [user] = await DB.query(
      `SELECT * FROM users 
      where email = ?`,
      [data.email]
      );
    if (!user[0]) return { http: 401, message: "Invalid Email or Password" };

    let pass1 = user[0].password;
    let pass2 = data.password;
    console.log(user, pass2);
    const validPassword = await bcrypt.compare(pass2, pass1);
    console.log(validPassword);
    if (!validPassword) return { http: 401, message: "Invalid Password" };

    const token = jwt.sign({ email: user[0].email }, process.env.JWTPRIVATEKEY);
    return { http: 200, data: token, message: "logged in successfully" };
  } catch (error) {
    return { http: 500, message: "Internal Server Error", error: error };
  }
}

async function addUser(data) {
  try {
    console.log(data);
    const { error } = validateSignup(data);
    if (error) return { http: 400, message: error.details[0].message };

    const [result] = await DB.query(
      `SELECT * FROM users 
    where email = ?`,
      [data.email]
    );

    if (result[0]) {
      return { http: 409, message: "User with given email alreay exists " };
    }

    return await createUser(data);
  } catch (error) {
    return { http: 500, message: error.message };
  }
}

async function createUser(data) {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashPassword = await bcrypt.hash(data.password, salt);
  await DB.query(
    `
    INSERT INTO users (firstname, lastname, email, password)
    VALUES (?,?,?,?)`,
    [data.firstname, data.lastname, data.email, hashPassword]
  );
  console.log(data);
  return { http: 200, message: "User added successfully" };
}

export { addUser, loginUser };
