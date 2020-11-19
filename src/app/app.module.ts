import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ClothesListComponent } from './Components/clothes-list/clothes-list.component';
import { EditAddClothesComponent } from './Components/edit-add-clothes/edit-add-clothes.component';
import { ClothesDetailsComponent } from './Components/clothes-details/clothes-details.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { AddEditCategoryComponent } from './Components/add-edit-category/add-edit-category.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';
import { ShopingBasketComponent } from './Components/shoping-basket/shoping-basket.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { NavComponent } from './Components/nav/nav.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';

import { CategoriesService } from './Services/categories-service.service';
import { ClientsService } from './Services/clients-service.service';
import { ClothesService } from './Services/clothes-service.service';
import { ShowPasswordDirective } from './Directives/show-password.directive';





@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    EditAddClothesComponent,
    ClothesDetailsComponent,
    CategoryListComponent,
    AddEditCategoryComponent,
    CategoryDetailsComponent,
    ShopingBasketComponent,
    LogInComponent,
    NavComponent,
    SignInComponent,
    ShowPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
        CategoriesService,
        ClientsService,
        ClothesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
