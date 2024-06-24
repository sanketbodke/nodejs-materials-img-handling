import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors());

app.use(express.json({ limit: "900kb" }));
app.use(express.urlencoded({ extended: true, limit: "900kb" }));
app.use(cookieParser());

// routes

import materialRoute from "./routes/material.route.js";

// router declaration

app.use("/api/v1/materials", materialRoute)

export { app }