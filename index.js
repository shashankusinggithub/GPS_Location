import express from "express"
import {addUser, loginUser} from "./database.js"

const app = express();
app.use(express.json())



app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.get("/users", (req, res) => {
  res.send("list of devices")
})

app.post("/signup", async (req, res) => {
  try{
    const report = await addUser(req.body)
    res.status(201).send(report)
  }
  catch{
    res.status(500).send({ message: "Internal Server Error" })
  }
})

app.post("/login", async (req, res) => {
  try{
    const report = await loginUser(req.body)
    console.log(report)
    res.status(201).send(report)
  }
  catch{
    res.status(500).send({ message: "Internal Server Error" })
  }
})

app.listen(8080, () => {
  console.log("server is running on port 8080")
})
