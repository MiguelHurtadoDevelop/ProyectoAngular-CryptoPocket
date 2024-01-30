import { Component } from '@angular/core';
import{Router, RouterModule} from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor( private router:Router, public auth:AuthService) {
    
  }
  iniciarSesionGoogle(){
    this.auth.loginGoogle(); 
  }
  
  async iniciarSesion(){
    console.log('Iniciando sesión');
    await this.auth.login(this.email, this.password);
    this.router.navigate(['/monedas']);
  }
}
