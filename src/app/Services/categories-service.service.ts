import { Injectable } from '@angular/core';
import { Category } from '../Classes/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  l_categories: Array<Category> = new Array<Category>();
  category:Category=new Category();
  url: string = "http://localhost:57650/api/categories/"
  constructor(private http: HttpClient) {
    this.GetList().subscribe(data =>this.l_categories=data, err => alert("כשל בגישה לשרת"))

  }
  //פונקציה להחזרת רשימת הקטגוריות

  GetList(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.url + "GetList");
  }

  //פונקציה לשליפת קטגוריה על פי קוד
  getOneById(id: number): Observable<Category> {
    return this.http.get<Category>(this.url + "getOneById/" + id)
  }
  //פונקציה להוספת קטגוריה
  AddToList(): Observable<Array<Category>> {
    return this.http.put<Array<Category>>(this.url + "AddToList", this.category);
  }
  //פונקציה לעדכון קטגוריה
  EditCategory(): Observable<Array<Category>> {
    return this.http.post<Array<Category>>(this.url + "EditCategory", this.category);
  }
  //פונקציה להסרת קטגוריה מהרשימה               
  DeleteFromList(id: number): Observable<Array<Category>> {
    return this.http.delete<Array<Category>>(this.url + "DeleteFromList/" + id)
  }
}
