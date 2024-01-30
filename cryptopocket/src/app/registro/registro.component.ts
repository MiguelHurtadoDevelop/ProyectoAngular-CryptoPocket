import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email: string = '';
  password: string = '';
  displayName: string = '';
  constructor( private router:Router, public auth:AuthService) {
    
  }
  crearUsuario(){
    console.log('Creando usuario');
    this.auth.register(this.displayName, this.email, this.password)
    this.router.navigate(['/login']);

  }

}
