import { Routes } from '@angular/router';
import { RegisterPage } from './shared/register-page/register-page';
import { ProductsPage } from './market/products-page/products-page';

// App routing configuration
// Default path redirects users to the register page
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'register' },

    // Route for user registration form
    { path: 'register', component: RegisterPage },

    // Route for viewing product categories
    { path: 'products', component: ProductsPage },
];
