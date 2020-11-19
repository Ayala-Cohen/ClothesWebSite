import { Component, OnInit } from '@angular/core';
import { ShopingBasketService } from 'src/app/Services/shoping-basket.service';
import { ClientsService } from 'src/app/Services/clients-service.service';

@Component({
  selector: 'app-shoping-basket',
  templateUrl: './shoping-basket.component.html',
  styleUrls: ['./shoping-basket.component.css']
})
export class ShopingBasketComponent implements OnInit 
  {
    result:boolean=false;
  constructor(private basket_service:ShopingBasketService,private client_service:ClientsService) { }

  ngOnInit() {
  }
    PerformShoping()//פונקצית ביצוע קניה
    {     
        this.basket_service.PerformShoping().subscribe(data=>{});
        this.result=true//אם הצליח לבצע קנייה
    }
    DeleteFromBasket(id:number)//מחיקה מסל הקניות
    {
      this.basket_service.RemoveFromBasket(id)
    }

}
