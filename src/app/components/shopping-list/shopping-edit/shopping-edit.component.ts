import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import { Ingredients } from '../../../shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription;

  // editing item
  editedItem: Ingredients;

  // form
  @ViewChild('f') slForm: NgForm;
  editMode: boolean = false;
  indexEditedItem: number;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.subscription = this.ingredientsService.startedEditing
      .subscribe((index: number) => {
        this.indexEditedItem = index;
        this.editedItem = this.ingredientsService.getIngredient(index);
        this.editMode = true;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngridient = new Ingredients(value.name, value.amount);

    if (this.editMode) {
      this.ingredientsService.updateIngredient(this.indexEditedItem, newIngridient);
    } else {
      this.ingredientsService.addIngridient(newIngridient);
    }
    // this.ingredientsService.getIngredients();
    this.clear();
  }

  onDelete() {
    this.ingredientsService.onDelete(this.indexEditedItem);
    this.clear();
  }

  clear() {
    this.editMode = false;
    this.slForm.reset();
  }

}
