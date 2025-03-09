require('dotenv').config()

import "reflect-metadata";
import express from "express"

import {AppDataSource} from "./data-source"

import cors from "cors"

import {handleError} from "./middlewares/handleError";

import recipeRouter from "./routes/recipe.routes";

const app = express()

app.use(cors())

app.use(express.json())

app.use("/recipes", recipeRouter)

app.use(handleError)

AppDataSource.initialize().then(() => {
    app.listen(4000, () => {
        console.log("O servidor está rodando em http://localhost:4000")
    })
}).catch(error => console.log(error))

