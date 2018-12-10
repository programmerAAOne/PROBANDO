import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { IngredientsService } from '../../services/ingredients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  ingredients: Ingredients[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients();

    this.subscription = this.ingredientsService.onchangedIngredient
      .subscribe((ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.ingredientsService.startedEditing.next(index);
  }

  // ngDoCheck() {
  //   // this.ingredients = [];
  //   this.ingredients = this.ingredientsService.getIngredients();
  // }

}
