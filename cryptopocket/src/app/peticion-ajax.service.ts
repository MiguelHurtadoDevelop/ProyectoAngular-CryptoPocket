import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionAjaxService {

  datosApi:any[]= [];
  detalleMoneda:any= undefined;
  

  constructor(private http: HttpClient ) { }

  peticionAJAX(){
    this.http.get('https://api.coingecko.com/api/v3/search/trending/').subscribe((data:any)=>{
      this.datosApi = data.coins;
    });
  }

  peticionDetalle(id:string){
    this.http.get('https://api.coingecko.com/api/v3/coins/' + id).subscribe((data:any)=>{
      this.detalleMoneda = data;
    });
  }

  peticionBusqueda(contenido:string){
    this.http.get('https://api.coingecko.com/api/v3/search?query=' + contenido).subscribe((data:any)=>{
      this.datosApi = data.coins;
    });
  }

  
}
