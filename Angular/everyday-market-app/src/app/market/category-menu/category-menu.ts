import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../models/category';
import { CategoryMenuItem } from '../category-menu-item/category-menu-item';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, CategoryMenuItem],
  templateUrl: './category-menu.html',
  styleUrl: './category-menu.css',
})

export class CategoryMenu {

  // Receives category list from parent (ProductsPage)
  @Input() categories: Category[] = [];

  // Sends the selected category back up to the parent
  @Output() categorySelected = new EventEmitter<Category>();

  // Triggered when a CategoryMenuItem is clicked
  onItemClicked(category: Category) {
    this.categorySelected.emit(category);
  }
}