import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.checkAuthentication();
  }

  onLogin() {
    /* Si las credenciales son correctas, las gueardo y
      redirecciono al Home page
      En caso de que las credenciales no sean correctas
      se muestra una alerta */
    if (this.email === 'admin' && this.password === '1234') {
      this.authService.saveCredentials(this.email, this.password);
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid credentials');
    }
  }
}
