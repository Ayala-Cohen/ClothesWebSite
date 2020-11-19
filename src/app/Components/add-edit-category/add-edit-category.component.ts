import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Classes/Category';
import { CategoriesService } from 'src/app/Services/categories-service.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  constructor(private category_service: CategoriesService) { }

  ngOnInit() {
  }
  //פונקציה להוספת קטגוריה
  AddOrEdit() {
    debugger
    if (this.category_service.category.id == undefined)//כאשר מדובר בקטגוריה חדשה
    {
      this.category_service.AddToList().subscribe(data => this.category_service.l_categories = data, err => alert("כשל בגישה לשרת"));
      this.category_service.category=new Category();
    }
    else//עריכת קטגוריה קיימת
    return this.category_service.EditCategory().subscribe(data => this.category_service.l_categories = data, err => alert("כשל בגישה לשרת"))
  }

}
