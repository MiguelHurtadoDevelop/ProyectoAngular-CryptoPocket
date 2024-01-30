import { Component, OnInit } from '@angular/core';
import{RouterModule, Router} from '@angular/router';
import { getAuth,  onAuthStateChanged } from 'firebase/auth';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [ CabeceraComponent, RouterModule, CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})





export class CabeceraComponent implements OnInit {

  


  constructor(private router:Router,  public auth:AuthService) {

    const sesion = getAuth();
    onAuthStateChanged(sesion, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.auth.Usuario = user; // Actualiza el usuario en tu servicio de autenticación
         // Navega a la página de monedas
      } else {
        // User is signed out
        this.auth.Usuario = null; // Actualiza el usuario en tu servicio de autenticación
         // Navega a la página de inicio de sesión
      }
    });
  }

  ngOnInit() {
    
  }
  cerrarSesion(){
    this.auth.cerrarSesion();

  }
}


