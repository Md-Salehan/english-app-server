import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

//helps to connect backend nd frontend
//origin: hepls set the frontend that can connect and avoiding others
app.use(cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}))

//to accept data in json
app.use(express.json({limit: "16kb"}))

//to accept data from url(params) + encoding it
//extended helps accept nested obj data  
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))
app.use(cookieParser())

//import routes
import botRouter from "./routes/bot.route.js";

app.use("/api/v1/bot", botRouter )


export {app};