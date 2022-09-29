import * as users from "../services/users.service.js";

async function login(req, res, next) {
  try {
    console.log(req.body)
    const temp = await users.loginUser(req.body);
    res.status(temp.http).send(temp);
  } catch (error) {
    console.error(`Error while logging in`, error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}

async function signup(req, res, next) {
  try {
    const temp = await users.addUser(req.body);
    res.status(temp.http).send(temp);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export { signup, login };
