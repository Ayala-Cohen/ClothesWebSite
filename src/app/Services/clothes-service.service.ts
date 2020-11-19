import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clothing } from '../Classes/Clothing';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  l_clothes: Array<Clothing> = new Array<Clothing>();
  clothing:Clothing=new Clothing();
  url: string = "http://localhost:57650/api/clothes/"
  constructor(private http: HttpClient) {
  }

  //פונקציה לשליפת רשימת הבגדים
  GetList(): Observable<Array<Clothing>> {
    return this.http.get<Array<Clothing>>(this.url + "GetList");
  }

  //פונקצית שליפת בגד על פי קוד
  GetOneById(id: number): Observable<Clothing> {
    return this.http.get<Clothing>(this.url + "GetOneById/" + id);
  }
  //פונקצית הוספת בגד לרשימה
  AddClothing(): Observable<Array<Clothing>> {
    return this.http.put<Array<Clothing>>(this.url + "AddClothing", this.clothing);
  }
  //פונקצית עדכון בגד מהרשימה
  EditClothing(): Observable<Array<Clothing>> {
    return this.http.post<Array<Clothing>>(this.url + "EditClothing", this.clothing);
  }
  //פונקצית הסרת בגד מהרשימה
  DeleteClothing(id: number): Observable<Array<Clothing>> {
    return this.http.delete<Array<Clothing>>(this.url + "DeleteClothing/" + id);
  }
  //פונקציה לשליפת בגדים על פי קטגוריה מסוימת
  GetListByCategory(id: number): Observable<Array<Clothing>> {
    return this.http.get<Array<Clothing>>(this.url + "GetListByCategory/" + id);
  }


}
