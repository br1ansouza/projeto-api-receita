import { Router } from "express";
import { RecipeController } from "../controllers/RecipeController";

const recipeRouter = Router();
const recipeController = new RecipeController();

recipeRouter.post("/", async (req, res) => {
  await recipeController.create(req, res);
});

recipeRouter.get("/", async (req, res) => {
  await recipeController.list(req, res);
});

export default recipeRouter;
