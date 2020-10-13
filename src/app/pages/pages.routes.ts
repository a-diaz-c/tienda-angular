import { RouterModule, Routes } from "@angular/router";
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
    {path: "", 
        component: PagesComponent, 
        children: [
            {path: "home", component: HomeComponent},
            {path: "producto/:idProducto", component: DetalleProductoComponent},
            { path: "", redirectTo: "/home", pathMatch: "full" }
        ],  
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
