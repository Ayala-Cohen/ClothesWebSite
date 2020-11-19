import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/Services/clothes-service.service';
import { CategoriesService } from 'src/app/Services/categories-service.service';
import { ActivatedRoute } from '@angular/router';
import { Clothing } from 'src/app/Classes/Clothing';

@Component({
  selector: 'app-edit-add-clothes',
  templateUrl: './edit-add-clothes.component.html',
  styleUrls: ['./edit-add-clothes.component.css']
})
export class EditAddClothesComponent implements OnInit {

  constructor(private clothing_service: ClothesService, private category_service: CategoriesService,active:ActivatedRoute) {
    //הצבת נתונים במשתנה מהסרוויס 
    active.params.subscribe(p=>this.clothing_service.GetOneById(p["id"]).subscribe(data=>this.clothing_service.clothing=data))
  }

  ngOnInit() {
  }
  AddOrEdit() 
  {
    if (this.clothing_service.clothing.id == undefined)//משתנה ריק- שליחה לפונקצית הוספת בגד
    {     
      this.clothing_service.AddClothing().subscribe(data => this.clothing_service.l_clothes = data, err => alert("כשל בגישה לשרת"));      
    }
    else//משתנה מלא - שליחה לפונקצית עריכת בגד
    {
      this.clothing_service.EditClothing().subscribe(data => this.clothing_service.l_clothes = data, err => alert("כשל בגישה לשרת"));
    }
    this.clothing_service.clothing=new Clothing()//איפוס המשתנה מהסרוויס
    }

}
