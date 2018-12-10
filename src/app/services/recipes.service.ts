import { Recipe } from "../components/recipes/recipe.model";
import { Injectable } from "@angular/core";
import { Ingredients } from '../shared/ingredients.model';
import { IngredientsService } from "./ingredients.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simply test 2', 
      'https://img-global.cpcdn.com/002_recipes/recipes_9698_v1393346452_receta_foto_00009698/751x532cq70/photo.jpg',
      [
        new Ingredients('Apples', 3)
      ]
    ),
  
  ];

  constructor(private ingredientsService: IngredientsService) { }

  getRecipes = (): Recipe[] => [...this.recipes];

  getRecipe = (index: number) => this.recipes[index];

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.ingredientsService.addIngridients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next([...this.recipes]);
  }

}