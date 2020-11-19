import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/Services/clients-service.service';
import { Client } from 'src/app/Classes/Client';
import { ClothesService } from 'src/app/Services/clothes-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route:Router,private client_service:ClientsService,private clothes_service:ClothesService) { 
    //שליפת רשימת הבגדים מהשרת על ידי הסרוויס
    this.clothes_service.GetList().subscribe(data => this.clothes_service.l_clothes = data, err => alert("כשל בגישה לשרת"))
    route.navigate(['/ClothesList'])//הצגת רשימת הבגדים

  }

  ngOnInit() {
  }
  GetOut()//פונקציה ליציאת משתמש מהמערכת
  {
    this.client_service.client=new Client();
    this.route.navigate(['/HomePage']);//חזרה לעמוד הבית
  }

}
