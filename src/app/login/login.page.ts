import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    /* Si las credenciales son correctas se redirecciona al Home page
      En caso de que las credenciales no sean correctas
      se muestra una alerta */
    if (this.email === 'admin' && this.password === '1234') {
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid credentials');
    }
  }
}
