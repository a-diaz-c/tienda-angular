import { RouterModule, Routes } from "@angular/router";
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { IdentificarseComponent } from './identificarse/identificarse.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
    {path: "", 
        component: PagesComponent, 
        children: [
            {path: "home", component: HomeComponent},
            {path: "producto/:idProducto", component: DetalleProductoComponent},
            {path: "carrito", component: CarritoComponent},
            {path: "signup", component: IdentificarseComponent},
            {path: "", redirectTo: "/home", pathMatch: "full" }
        ],  
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
