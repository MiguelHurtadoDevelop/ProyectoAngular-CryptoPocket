import { Component, Input, SimpleChanges, OnChanges  } from '@angular/core';
import { PeticionAjaxService } from '../peticion-ajax.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{Router, RouterModule} from '@angular/router';
import { FirestoreService } from '../firestore.service';





@Component({
  selector: 'app-detalles-monedas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './detalles-monedas.component.html',
  styleUrl: './detalles-monedas.component.css'
})
export class DetallesMonedasComponent implements OnChanges {

  items:any[] = [];
  @Input( ) id:string = '';

  constructor( public ajax:PeticionAjaxService, private router:Router, public firestore:FirestoreService) {
    
  }
  

  

  ngOnChanges(changes: SimpleChanges): void {
    this.ajax.peticionDetalle(this.id);

  }
  comprobarSeguida(id:any){
    if(this.firestore.datosFS.find(element=>element.idMoneda==id)){
      return true;
    }else{
      return false;
    }
  }
  volver(){
    this.router.navigate(['/monedas']);
  }
  
  seguirMoneda(id:any){
    this.firestore.seguirMoneda(id);
  }

  dejarDeSeguirMoneda(id:any){
    this.firestore.dejarDeSeguir(id);
  }

  
  

}