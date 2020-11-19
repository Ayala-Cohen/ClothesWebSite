import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/Services/clothes-service.service';
import { ClientsService } from 'src/app/Services/clients-service.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  constructor(private clothing_service:ClothesService) { 
  }
  ngOnInit() {


  }

}
