import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
