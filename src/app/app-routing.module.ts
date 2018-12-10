import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesStartComponent } from './components/recipes/recipes-start/recipes-start.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './components/recipes/recipes-edit/recipes-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './components/auth/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent }, 
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipesEditComponent },
    { path: ':id', component: RecipesDetailComponent },
    { path: ':id/edit', component: RecipesEditComponent }
  ], canActivate: [AuthGuard] },
  { path: 'shoppinglist', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
