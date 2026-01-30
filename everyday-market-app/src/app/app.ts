import { Component } from '@angular/core';

import { Header } from './shared/header/header';
import { ProductsPage } from './market/products-page/products-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ProductsPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
