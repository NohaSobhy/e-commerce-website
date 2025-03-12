import { Routes } from '@angular/router';
import { ElectronicsComponent } from './pages/products/electronics/electronics.component';
import { FurnitureComponent } from './pages/products/furniture/furniture.component';

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
];
