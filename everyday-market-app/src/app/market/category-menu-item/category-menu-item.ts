import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css',
})
export class CategoryMenuItem {

  // Name of the category to display on the button
  @Input() categoryName = '';

  // Emits when the item is clicked
  @Output() itemClicked = new EventEmitter<string>();

  onItemClick() {
    this.itemClicked.emit(this.categoryName);
  }
}