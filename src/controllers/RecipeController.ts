import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Recipe } from "../entities/Recipe";
import { RecipeIngredient } from "../entities/RecipeIngredient";
import { RecipeStep } from "../entities/RecipeStep";

export class RecipeController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, preparation_time, is_fitness, ingredientes, steps } = req.body;

    try {
      const result = await AppDataSource.transaction(async (transactionalEntityManager) => {
        const recipe = transactionalEntityManager.create(Recipe, {
          name,
          preparation_time,
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
}
