import { initializeApp } from 'firebase/app';
import { Injectable } from '@angular/core';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Router, RouterModule } from '@angular/router';







@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Usuario:any;
  constructor (private router:Router ) { }

  loginGoogle(){
    console.log('Iniciando sesión con Googleeeee');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      // The signed-in user info.
      const user = result.user;
      this.Usuario = user;
      this.router.navigate(['/monedas']);

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  login(email:string, password:string){
    console.log('Iniciando sesióooooooon');
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      // Signed in 
      const user = userCredential.user;
      this.Usuario = user;
      this.router.navigate(['/monedas']);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    });
  }

  register( displayName:any, email:string, password:string){
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Obtén el usuario recién creado
      const user = userCredential.user;

      // Actualiza el perfil del usuario con el displayName
      await updateProfile(user, { displayName: displayName});
      this.router.navigate(['/login']);
      // Puedes redirigir al usuario o realizar otras acciones después del registro
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error('Error al registrar el usuario:', errorCode, errorMessage);
    });
  }

  cerrarSesion(){
    const auth = getAuth();
    auth.signOut().then(() => {
      // Sign-out successful.
      this.router.navigate(['']);
      this.Usuario = null;
    }).catch((error) => {
      // An error happened.
      console.log('Error al cerrar sesión');
    });
  }

}
