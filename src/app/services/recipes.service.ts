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
      'BIZCOCHO DE LECHE EVAPORADA',
      'El bizcocho de leche evaporada es una clásica receta, ideal para compartir en una tarde de té. Se trata de un postre hecho con leche evaporada, en vez de...', 
      'https://okdiario.com/img/2018/10/15/bizcocho-de-leche-evaporada-487x274.jpg',
      [
        new Ingredients('Bread', 2),
        new Ingredients('Chease', 4),
      ]
    ),
    new Recipe(
      'A test recipe',
      'This is a simply test 2', 
      'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg',
      [
        new Ingredients('Apples', 3)
      ]
    ),
    new Recipe(
      'A test recipe',
      'This is a simply test 3', 
      'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg',
      [
        new Ingredients('Orange', 2),
        new Ingredients('Salt', 2)
      ]
    )
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