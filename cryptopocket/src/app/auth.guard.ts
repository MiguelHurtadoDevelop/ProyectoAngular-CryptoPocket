import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let session  = inject(AuthService);

  if(session.Usuario){
    return true;
  }else{
    router.navigate(['']);
    return false;
  }
};
