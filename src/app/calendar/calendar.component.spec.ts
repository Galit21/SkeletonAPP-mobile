import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  template: ``,
})
export class CalendarComponent {
  @Output() dateSelected = new EventEmitter<string>();

  onDateSelected(event: CustomEvent) {
    const selectedDate = event.detail.value; 
    this.dateSelected.emit(selectedDate); 
  }
}
