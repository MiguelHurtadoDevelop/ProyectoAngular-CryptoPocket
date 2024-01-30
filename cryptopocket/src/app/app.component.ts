import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetallesMonedasComponent } from './detalles-monedas/detalles-monedas.component';
import { MonedasComponent } from './monedas/monedas.component';
import { LandingComponent} from './landing/landing.component';
import{FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, CabeceraComponent, MonedasComponent, DetallesMonedasComponent, LandingComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  NombreUsruario = 'Miguel Hurtado';
  UrlImagen = 'https://lasventastour.com/wp-content/uploads/2020/01/Toro-Bravo-Las-Ventas-Tour-2.png'
  id='';

  ngOnInit(): void {
    console.log('Componente inicializado'); 
  }
  
}