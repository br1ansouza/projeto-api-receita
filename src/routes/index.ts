import { Router, Request, Response } from 'express';
import { RecipeController } from '../controllers/RecipeController';

const routes = Router();
const recipeController = new RecipeController();

routes.post('/recipes', async (req: Request, res: Response) => {
  await recipeController.create(req, res);
});

export default routes;
