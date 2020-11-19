import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories-service.service';
import { ClientsService } from 'src/app/Services/clients-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private category_service:CategoriesService) { 
  }

  ngOnInit() {
  }

}
