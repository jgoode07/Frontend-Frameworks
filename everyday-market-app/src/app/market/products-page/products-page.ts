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

  // Hard-coded list of categories shown in the menu
  categoryList: Category[] = [
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Cars' },
    { id: 3, name: 'Photography' },
    { id: 4, name: 'True Crime' },
    { id: 5, name: 'Travel' },
  ];

  // Stores the name of the category that was last selected
  selectedCategoryName = '';

  // Runs when a category is selected in the child component
  onCategorySelected(category: Category) {
    this.selectedCategoryName = category.name;

    // Display selected category on right at the same time as the alert box
    setTimeout(() => {
      alert(`You selected: ${category.name}`);
    }, 0);
  }
}