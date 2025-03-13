import { Routes } from '@angular/router';
import { ElectronicsComponent } from './pages/products/electronics/electronics.component';
import { FurnitureComponent } from './pages/products/furniture/furniture.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    { 
        path: 'electronics', 
        component: ElectronicsComponent, 
        title: 'Amazon | Electronics',
    },
    { 
        path: 'furniture', 
        component: FurnitureComponent,
        title: 'Amazon | Furniture',
    },

    {
        path : 'product-details/:id', 
        component: ProductDetailsComponent , 
        title: 'Amazon | Product-Details'
    }
];
