import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title: string = 'Bienvendio!';
  user!: string;
  password!: string;
  validate: Boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  validateLogin() {
    if (this.user == 'admin' && this.password == '123') {
      this.validate = true;
      this.toastMessage('Login correcto');
      const navigationExtras: NavigationExtras = {
        state: { user: this.user },
      };
      this.router.navigate(['/index', navigationExtras]);
    } else {
      this.toastMessage('Login Incorrecto');
      console.log(this.validate);
    }
  }
  async toastMessage(message: string) {
    const toast = await this.toastController.create({
      color: 'primary',
      duration: 3000,
      message,
    });
    toast.present();
  }
}
