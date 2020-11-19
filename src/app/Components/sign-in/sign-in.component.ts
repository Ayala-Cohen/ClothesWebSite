import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients-service.service';
import { Client } from 'src/app/Classes/Client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  secondPassword:string;
  constructor(private client_service:ClientsService,private route:Router) { }
  ngOnInit() {
  }
  AddClient()//פונקציה להוספת לקוח 
  {
    this.client_service.AddClient().subscribe(data=>{
      if(data==false)//הוספת לקוח רק במקרה שהוא לא רשום כבר במערכת
        alert("לא ניתן להוסיף לקוח שקיים במערכת")
    });
    this.client_service.client=new Client();
    this.route.navigate(['/LogIn'])//שליחה לקומפוננטת התחברות
  }
}
