import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  
  id: number;
  recipe: Recipe;
  private subscription: Subscription;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: Params) => {
      this.id = +param['id']
      this.recipe = this.recipeService.getRecipe(this.id)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList({ ingredients }) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
