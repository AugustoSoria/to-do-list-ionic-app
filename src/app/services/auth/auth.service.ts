import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storageKey = 'authData';

  constructor(private router: Router) {}

  // Guardo las credenciales en localStorage
  saveCredentials(email: string, password: string) {
    const authData = { email, password };
    localStorage.setItem(this.storageKey, JSON.stringify(authData));
  }

  // Si las credenciales existen las retorno
  getCredentials() {
    const authData = localStorage.getItem(this.storageKey);
    if (authData) {
      return JSON.parse(authData);
    }
    return null;
  }

  // Return true si el usuario esta registrado
  isAuthenticated(): boolean {
    return this.getCredentials() !== null;
  }

  // Si esta registrado redirecciono al Home
  checkAuthentication() {
    if (this.isAuthenticated()) {
      this.router.navigateByUrl('/home');
    }
  }
}
