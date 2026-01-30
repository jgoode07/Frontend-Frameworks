import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryMenu } from '../category-menu/category-menu';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CategoryMenu],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  categoryList: Category[] = [
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Cars' },
    { id: 3, name: 'Photography' },
    { id: 4, name: 'True Crime' },
    { id: 5, name: 'Travel' },
  ];
}