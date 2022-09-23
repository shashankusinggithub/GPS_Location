import express from "express"
import {addUser, loginUser, deviceData,allData} from "./database.js"
import cors from "cors"


const app = express();
app.use(express.json())
app.use(cors())


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.get("/users", (req, res) => {
  console.log("hi")
  res.send("list of devices")
})

app.post("/signup", async (req, res) => {
  try{
    const report = await addUser(req.body)
    console.log(report)
    res.status(201).send(report)
  }
  catch{
    res.status(500).send({ message: "Internal Server Error" })
  }
})

app.post("/login", async (req, res) => {
  
  try{
    console.log(req.body)
    const report = await loginUser(req.body)
    res.status(201).send(report)
  }
  catch{
    res.status(500).send({ message: "Internal Server Error" })
  }
})

app.get("/devices/:id", async (req,res) => {
  const report = await deviceData(req.params['id'])
  console.log(report)
  res.status(201).send(report)
} )

app.get("/devices", async (req,res) => {
  const report = await allData()
  console.log(report)
  res.status(201).send(report)
} )

app.listen(8080, () => {
  console.log("server is running on port 8080")
})
