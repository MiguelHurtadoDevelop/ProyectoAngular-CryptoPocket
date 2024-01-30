import { Injectable, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection,deleteDoc, addDoc, query, where, doc} from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  detalleMonedaGuardada:any[] = [];;
  firestore = inject(Firestore);
  datosFS:any[] = [];
  usuarioID: string | null = null;


  constructor( private http: HttpClient) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.usuarioID = user.uid;
        console.log(this.usuarioID);
      } else {
        this.usuarioID = null;
      }
    });
   }

  obtenerDatosFirestore(){
    getDocs(query(collection(this.firestore, 'monedasguardadas'), where('usuario', '==', this.usuarioID))).then((response=>{
      this.datosFS= response.docs.map(doc=>doc.data());
      this.detalleMonedaGuardada = [];
      this.datosFS.forEach(element => {
        this.detalleMonedaSave(element.idMoneda);
      });
    }))
  }

  detalleMonedaSave(id:string){
    this.http.get('https://api.coingecko.com/api/v3/coins/' + id).subscribe((data:any)=>{
     
      this.detalleMonedaGuardada.push(data);
    });
  }

  seguirMoneda(id: any) {
    if(this.usuarioID!=null){
      if(!this.datosFS.find(element=>element.idMoneda==id)){
        
        addDoc(collection(this.firestore, "monedasguardadas"), {
          idMoneda: id,
          usuario: this.usuarioID
        }).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.obtenerDatosFirestore();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      
      }


      
    }
  }

  dejarDeSeguir(id: any) {

    const q = query(collection(this.firestore, "monedasguardadas"), where("idMoneda", "==", id));

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref).then(() => {
          console.log("Document successfully deleted!");
          this.obtenerDatosFirestore();
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      });
    });

  }
}
