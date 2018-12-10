import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';

export class IngredientsService {

  onchangedIngredient = new Subject<Ingredients []>();
  // onchangedIngredient = new Subject<Ingredients []>();
  startedEditing = new Subject<number>();

  private ingredients:Ingredients[] = [
    new Ingredients('Tomatos', 5),
    new Ingredients('Apples', 7)
  ];

  getIngredients = () => [...this.ingredients];

  getIngredient = (index: number) => this.ingredients[index];

  updateIngredient(index: number, ingredient: Ingredients) {
    this.ingredients[index] = ingredient;
    this.onchangedIngredient.next(this.ingredients.slice());
  }
 
  addIngridient(ingredient: Ingredients) {    
    // this.ingredients.push(ingredient);
    // this.onchangedIngredient.next(this.ingredients.slice());

    const foundIngredient = this.ingredients.find(foundIngredient => 
      foundIngredient.name === ingredient.name
    );
    if (!foundIngredient) {
      this.ingredients.push(ingredient);
      this.onchangedIngredient.next([...this.ingredients]);
    } else {
      foundIngredient.amount = parseInt(`${foundIngredient.amount}`) + parseInt(`${ingredient.amount}`);
    }
  }

  addIngridients(auxIngredients: Ingredients[]) {
    auxIngredients.forEach(ingredient => {
      const foundIngredient = this.ingredients.find(foundIngredient => 
        foundIngredient.name === ingredient.name
      );
      if (!foundIngredient) {
        this.ingredients.push(ingredient);
      } else {
        foundIngredient.amount += ingredient.amount;
      }
    });
    // this.onchangedIngredient.emit([...this.ingredients]);
  }

  onDelete(index: number) {
    this.ingredients.splice(index, 1);
    this.onchangedIngredient.next(this.ingredients.slice());
  }
  
}