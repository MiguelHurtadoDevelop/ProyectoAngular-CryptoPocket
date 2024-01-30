import {RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import {MonedasComponent} from './monedas/monedas.component';
import {DetallesMonedasComponent} from './detalles-monedas/detalles-monedas.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';




export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'monedas', component: MonedasComponent, canActivate: [authGuard]},
    { path: 'detalleMonedas/:id', component: DetallesMonedasComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent }

    
];