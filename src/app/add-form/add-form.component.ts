import {Component, Input} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {CalendarService} from '../calendar/calendar.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  @Input() form;
  canInput: boolean;
  currentDate: string;

  constructor(private service: TimeLineListService, private calendarService: CalendarService) {
    this.canInput = true;
  }

  saveEdit() {
    this.canInput = !this.canInput;
    if (!this.canInput) {
      const date = new Date();
      this.form.currentDate = date;
      this.currentDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + " "
        + date.getHours() + ':' + date.getMinutes();
      this.service.sortByDate();
      this.calendarService.getCalendarEvents();
    }
  }

  deleteItem() {
    this.service.deleteForm(this.form);
  }
}
