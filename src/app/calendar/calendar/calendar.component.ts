import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, Output, EventEmitter
} from '@angular/core';
import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {CalendarService} from '../calendar.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CalendarPopUpComponent} from '../calendar-pop-up/calendar-pop-up.component';
import {Interview} from '../interview-model';
import {CustomDateFormatter} from './custom-date-formatter.provider';




export interface DialogData {
  interview: Interview;
  date: Date;
}

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalendarComponent {
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  constructor(private calendarService: CalendarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.events = this.calendarService.getCalendarEvents();
  }


  openDialog(date: Date, data: Interview) {
    const dialogRef = this.dialog.open(CalendarPopUpComponent, {
      width: '850px',
      data: {interview: data, date: date, }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.events = this.calendarService.getCalendarEvents();
      this.refresh.next();
    });
  }


  handleEvent(action: string, event: CalendarEvent): void {
    this.openDialog(new Date(),this.calendarService.getInterview(event.id));
  }

  async deleteEvents(id: number) {
    if(confirm('Are you sure?')) {
      this.calendarService.deleteInterview(id);
      await this.delay(100);
      this.events = this.calendarService.getCalendarEvents();
      this.refresh.next();
    }
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
