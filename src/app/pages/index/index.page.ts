import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CalendarComponent } from 'src/app/calendar/calendar.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  @ViewChild('popover') popover: any;
  isOpen = false;
  user: string = '';
  name: string = '';
  lastName: string = '';
  date: string ='';

  ngOnInit() {}

  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.user = state['user'];
    }
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: CalendarComponent,
      event: e,
      translucent: true,
    });
    popover.onDidDismiss().then((data) => {
      if (data.data) {
        this.date = data.data; 
        console.log('Fecha seleccionada:', this.date);
      }
    });
    await popover.present();
  }
}
