require("dotenv").config();

import "reflect-metadata";
import express from "express";
import cors from "cors";

import { AppDataSource } from "./data-source";
import { handleError } from "./middlewares/handleError";
import recipeRouter from "./routes/recipe.routes";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/recipes", recipeRouter);

app.use(handleError);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
