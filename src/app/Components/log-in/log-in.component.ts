import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private client_service: ClientsService) { }

  ngOnInit() {

  }

  //פונקציה לבדיקה האם לקוח קיים
  CheckIfExist() {
    this.client_service.CheckIfExist().subscribe(data => 
    {
      if (data == false)
        alert("לקוח אינו קיים")
      else
      //קריאה לפונקציה שתחזיר את כל פרטי הלקוח שהתחבר ותציב אותם במשתנה מהסרוויס
        this.client_service.GetOneByUserName().subscribe(data => this.client_service.client = data)

    })
  }


}
