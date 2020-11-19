import { Injectable } from '@angular/core';
import { ShopingBasket } from '../Classes/ShopingBasket';
import { HttpClient } from '@angular/common/http';
import { ClientsService } from './clients-service.service';
import { Observable } from 'rxjs';
import { ClothesService } from './clothes-service.service';
import { Clothing } from '../Classes/Clothing';

@Injectable({
  providedIn: 'root'
})
export class ShopingBasketService {
  items_in_basket:Array<ShopingBasket>=new Array<ShopingBasket>();
  new_item_in_basket:ShopingBasket=new ShopingBasket();
  // items_in_basket_type_clothing:Array<Clothing>=new Array<Clothing>();
  final_price:number;

  url: string = "http://localhost:57650/api/buying/"
  constructor(private http:HttpClient,private client_service:ClientsService,private clothes_service:ClothesService) { }
  //פונקציה להוספת פריט לסל הקניות
  AddItemToBasket()
  {
    if(this.new_item_in_basket.amount==undefined)
      this.new_item_in_basket.amount=1;//הצבת ערך ברירת מחדל בשדה כמות
    this.new_item_in_basket.final_price=this.new_item_in_basket.amount*this.new_item_in_basket.price_for_one
    this.items_in_basket.push(this.new_item_in_basket);
    // this.GetAllClothingDetails(this.new_item_in_basket)
    this.new_item_in_basket=new ShopingBasket();
  }
  RemoveFromBasket(id:number)//פונקציה להסרת פריט מסל הקניות
  {
    let item=this.items_in_basket.filter(x=>x.cloth_id==id)[0]
    let index=this.items_in_basket.indexOf(item);
    // let index_in_list_type_clothing=this.items_in_basket_type_clothing.indexOf(this.items_in_basket_type_clothing.filter(x=>x.id==id)[0]);
    this.items_in_basket.splice(index,1);
    // this.items_in_basket_type_clothing.splice(index_in_list_type_clothing,1)
  }
  PerformShoping():Observable<void>//פונקצית ביצוע קניה
  {
    return this.http.post<void>(this.url+"perfomingShoping/"+this.client_service.client.id,this.items_in_basket)
  }
  // GetAllClothingDetails(item:ShopingBasket)
  // {
  //   this.clothes_service.GetOneById(item.cloth_id).subscribe(data=>this.items_in_basket_type_clothing.push(data))
  // }
  updatePrice(cloth_id:number)// פונקציה לעדכון מחיר- כאשר המשתמש מעדכן את הכמות עבור בגד מסוים בסל הקניות
  {
    let item=this.items_in_basket.filter(x=>x.cloth_id==cloth_id)[0]
    item.final_price=item.amount*item.price_for_one;

  }
  calculatePrice():number//פונקציה לחישוב המחיר הסופי של הקניה
  {
    this.final_price=0
    this.items_in_basket.forEach(item => {
      this.final_price+=item.final_price
    });
    return this.final_price
  }
}
