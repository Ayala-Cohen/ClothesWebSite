import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditCategoryComponent } from './Components/add-edit-category/add-edit-category.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { ClothesDetailsComponent } from './Components/clothes-details/clothes-details.component';
import { ClothesListComponent } from './Components/clothes-list/clothes-list.component';
import { EditAddClothesComponent } from './Components/edit-add-clothes/edit-add-clothes.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ShopingBasketComponent } from './Components/shoping-basket/shoping-basket.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { NavComponent } from './Components/nav/nav.component';


const routes: Routes = 
[
  {path:"AddOrEditCategory" ,component:AddEditCategoryComponent},
  {path:"CategoryDetails",component:CategoryDetailsComponent},
  {path:"CategoryList",component:CategoryListComponent},
  {path:"ClothesDetails/:id",component:ClothesDetailsComponent},
  {path:"ClothesList",component:ClothesListComponent},
  {path:"AddOrEditClothing/:id",component:EditAddClothesComponent},
  {path:"LogIn",component:LogInComponent},
  {path:"ShopingBasket",component:ShopingBasketComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"HomePage",component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
