import { Injectable } from '@angular/core';
import { Client } from '../Classes/Client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  client:Client=new Client()
  url: string = "http://localhost:57650/api/clients/"
  constructor(private http: HttpClient) { }

  //פונקצית הוספת לקוח 
  AddClient():Observable<boolean> {
    debugger
    this.client.client_kind=0//הצבת סוג משתמש 
    return this.http.put<boolean>(this.url + "AddClient", this.client);
  }

  //פונקציה לבדיקה האם הלקוח שמור במערכת
  CheckIfExist() {
    debugger
    return this.http.post<boolean>(this.url + "CheckIfExist", this.client);
  }
  GetOneByUserName():Observable<Client>//פונקציה לשליפת כל פרטי הלקוח שהתחבר
  {
    debugger
    return this.http.get<Client>(this.url+"GetOneByUserName/" + this.client.user_name);
  }
}
