import { Router, Request, Response } from "express";
import { RecipeController } from "../controllers/RecipeController";

const recipeRouter = Router();
const recipeController = new RecipeController();

recipeRouter.post("/", async (req: Request, res: Response) => {
  await recipeController.create(req, res);
});

export default recipeRouter;
