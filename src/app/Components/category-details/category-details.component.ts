import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories-service.service';
import { Category } from 'src/app/Classes/Category';
import { Routes, RouterModule, Router } from '@angular/router'; 
import { ClientsService } from 'src/app/Services/clients-service.service';
import { ClothesService } from 'src/app/Services/clothes-service.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  @Input() cetegory:Category
  constructor(private route:Router ,private category_service:CategoriesService,private client_service:ClientsService,private clothing_service:ClothesService) {
   }

  ngOnInit() {

  }
  Edit(c:Category)//פונקציה לעריכת קטגוריה
  {
    this.category_service.category=c;
  }

  Delete(id:number)//פונקציה למחיקת קטגוריה
  {
    let l_categories_lenght=this.category_service.l_categories.length
    this.category_service.DeleteFromList(id).subscribe(data=>
      {
        this.category_service.l_categories=data
        if(this.category_service.l_categories.length==l_categories_lenght)
          alert("לא ניתן למחוק קטגוריה שיש בגדים משויכים אליה")
      },
      err=>alert("כשל בגישה לשרת"));
  }
  OpenCustomizedList()//פונקציה להצגת בגדים על פי שם קטגוריה
  {
    this.clothing_service.GetListByCategory(this.cetegory.id).subscribe(data=>this.clothing_service.l_clothes=data)
    this.route.navigate(['/ClothesList'])
  }
}
