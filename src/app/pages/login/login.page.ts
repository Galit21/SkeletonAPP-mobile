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
  user: string = '';
  password: string = '';
  validate: Boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  validateLogin(user: string, password: string) {
    if (user != '' && password != '') {
      this.validate = true;
    } else;
  }

  login() {
    this.validateLogin(this.user, this.password);

    if (this.validate == true) {
      const extras = {
        state: { user: this.user },
      };
      this.router.navigate(['/index'], extras);
    } else {
      this.toastMessage('Login Incorrecto');
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

  ngOnInit() {}
}
