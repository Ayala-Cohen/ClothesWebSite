import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/Services/clothes-service.service';
import { Clothing } from 'src/app/Classes/Clothing';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopingBasketService } from 'src/app/Services/shoping-basket.service';
import { ClientsService } from 'src/app/Services/clients-service.service';


@Component({
  selector: 'app-clothes-details',
  templateUrl: './clothes-details.component.html',
  styleUrls: ['./clothes-details.component.css']
})
export class ClothesDetailsComponent implements OnInit {
  item: Clothing;
  result: boolean
  constructor(private clothing_service: ClothesService, private basket_service: ShopingBasketService, private active: ActivatedRoute, private client_service: ClientsService,private route:Router) {
      active.params.subscribe(p => this.clothing_service.GetOneById(p["id"]).subscribe(data => { this.item = data }))
  }

  ngOnInit() {
  }

  //פונקציה למחיקת בגד
  Delete(id: number) {
    this.clothing_service.DeleteClothing(id).subscribe(data => {
      if (data.length != this.clothing_service.l_clothes.length)
        this.clothing_service.l_clothes = data
      else
        alert("לא ניתן למחוק בגדים אשר רשומים בארכיון הקניות")
    },
      err => alert("כשל בגישה לשרת"))
      this.route.navigate(['/HomePage'])
  }
  //פונקצית הוספה לסל
  AddToBasket() {
    //הצבת חלק מנתוני הבגד במשתנה מסוג סל קניות בסרוויס סל קניות
    this.basket_service.new_item_in_basket.cloth_id = this.item.id;
    this.basket_service.new_item_in_basket.cloth_name = this.item.name;
    this.basket_service.new_item_in_basket.price_for_one = this.item.price;
    this.basket_service.AddItemToBasket();//שליחה לפונקצית הוספה לסל בסרוויס
    this.result = true;
  }

}
