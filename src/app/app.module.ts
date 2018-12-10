import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { ItemComponent } from './components/recipes/recipes-list/recipe-item/recipe-item.component';
import { IngredientsService } from './services/ingredients.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesStartComponent } from './components/recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './components/recipes/recipes-edit/recipes-edit.component';
import { RecipeService } from './services/recipes.service';
import { SigninComponent } from './components/auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    ShoppingEditComponent,
    ItemComponent,
    RecipesStartComponent,
    RecipesEditComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    IngredientsService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
