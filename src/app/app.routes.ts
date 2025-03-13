import { Routes } from '@angular/router';
import { ElectronicsComponent } from './pages/products/electronics/electronics.component';
import { FurnitureComponent } from './pages/products/furniture/furniture.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent, 
        title: 'Amazon | Login',
    },
    { 
        path: 'register', 
        component: RegisterComponent, 
        title: 'Amazon | Register',
    },
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
