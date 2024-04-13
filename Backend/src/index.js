import express from "express"
import dotenv from 'dotenv';
dotenv.config();
import connect from "./database/connect.js"
const app = express()

 app.get("/", (req,res)=>{
            res.send("start")
 })


const port = process.env.Port || 3000
connect()
.then( () =>{
   app.listen(port,()=>{
      console.log("App is listing on port 3000")
   })}
)
.catch( (error) =>{
   console.log('database connection error',error)}
)

import routes from "./Routes/user.routes.js";
app.use("/api",routes)