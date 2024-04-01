 import express from "express"

 const app = express()

 app.get("/", (req,res)=>{
            res.send("start")
 })

const port = process.env.Port || 3000

 app.listen(port,()=>{
    console.log("App is listing on port 3000")
 })