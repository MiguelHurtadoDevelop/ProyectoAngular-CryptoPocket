import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionAjaxService } from '../peticion-ajax.service';
import{Router, RouterModule} from '@angular/router';
import { FirestoreService } from '../firestore.service';




@Component({
  selector: 'app-monedas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './monedas.component.html',
  styleUrl: './monedas.component.css'
})

export class MonedasComponent implements OnInit{
  monedaBuscar:string='';
  buscando=false;
  monedasGuardadas:any[]=[];
  

  @Output() pulsado = new EventEmitter<string>();

  constructor(public ajax:PeticionAjaxService, private router:Router, public firestore:FirestoreService) {
    
    
  }

  ngOnInit() {
    this.ajax.peticionAJAX();
    this.firestore.obtenerDatosFirestore();
  }
 



  buscar(){
    if(this.monedaBuscar==''){
      this.buscando=false;
      this.ajax.peticionAJAX();
    }else{
      this.ajax.peticionBusqueda(this.monedaBuscar);
      this.buscando=true;
    }
    
  }


  comprobarSeguida(id:any){
    if(this.firestore.datosFS.find(element=>element.idMoneda==id)){
      return true;
    }else{
      return false;
    }
  }
  

  mostrarDetalle(id:any){
    console.log(id);
    this.router.navigate(['/detalleMonedas/'+id]);
    
  }

  seguirMoneda(id:any){
    this.firestore.seguirMoneda(id);
  }

  dejarDeSeguirMoneda(id:any){
    this.firestore.dejarDeSeguir(id);
  }

  
}