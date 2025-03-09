import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Recipe } from "../entities/Recipe";
import { RecipeIngredient } from "../entities/RecipeIngredient";
import { RecipeStep } from "../entities/RecipeStep";

export class RecipeController {
  // Método para criar uma receita
  async create(req: Request, res: Response): Promise<Response> {
    const { name, preparation_time, is_fitness, ingredientes, steps } = req.body;

    try {
      const result = await AppDataSource.transaction(async (transactionalEntityManager) => {
        const recipe = transactionalEntityManager.create(Recipe, {
          name,
          preparation_time: `${preparation_time}:00`, // Ajuste para formato TIME
          is_fitness,
        });

        await transactionalEntityManager.save(recipe);

        for (const ingredient of ingredientes) {
          const newIngredient = transactionalEntityManager.create(RecipeIngredient, {
            name: ingredient.name,
            recipe,
          });
          await transactionalEntityManager.save(newIngredient);
        }

        for (const step of steps) {
          const newStep = transactionalEntityManager.create(RecipeStep, {
            description: step.description,
            recipe,
          });
          await transactionalEntityManager.save(newStep);
        }

        return recipe;
      });

      return res.status(201).json(result);
    } catch (error) {
      console.error("Erro ao cadastrar receita:", error);
      return res.status(500).json({ error: "Erro interno ao criar receita." });
    }
  }

  // Método para listar todas as receitas com seus ingredientes e passos
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const recipeRepository = AppDataSource.getRepository(Recipe);

      const recipes = await recipeRepository.find({
        relations: ["ingredients", "steps"],
      });

      return res.status(200).json(recipes);
    } catch (error) {
      console.error("Erro ao listar receitas:", error);
      return res.status(500).json({ error: "Erro interno ao listar receitas." });
    }
  }
}
