import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, Output, EventEmitter, Input
} from '@angular/core';
import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarDateFormatter,
  CalendarEvent, CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {CalendarService} from '../calendar.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CalendarPopUpComponent} from '../calendar-pop-up/calendar-pop-up.component';
import {Interview} from '../interview-model';
import {CustomDateFormatter} from './custom-date-formatter.provider';
import { registerLocaleData } from '@angular/common';
import { WeekViewAllDayEvent, DayViewEvent } from 'calendar-utils';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';

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
  @Input() eventTemplate: TemplateRef<any>;
  @Input() weekEvent: WeekViewAllDayEvent | DayViewEvent;
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean;
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  constructor(private calendarService: CalendarService,
              public dialog: MatDialog,) {

  }
  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fas fa-pen"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fas fa-trash-alt"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.deleteEvents(+event.id);
  //     }
  //   }
  // ];

  ngOnInit() {
    this.events = this.calendarService.getCalendarEvents();
    console.log(this.events);

    // this.events[0].actions = this.actions;
    this.refresh.next();
  }

  selectEvent(event) {
    console.log(555);
  }

  openDialog( date: Date, data: Interview) {
    const dialogRef = this.dialog.open(CalendarPopUpComponent, {
      width: '870px',
      height: '700px',
      data: {interview: data, date: date, }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.events = this.calendarService.getCalendarEvents();
      this.refresh.next();
    });
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    let interview: Interview = this.calendarService.getInterview(event.id);
    interview.date = newStart;
    event.end = newEnd;
    this.calendarService.deleteInterview(+event.id);
    this.calendarService.saveInterview(interview);
    this.events = this.calendarService.getCalendarEvents();
    this.refresh.next();

  }

  handleEvent(event: CalendarEvent): void {

    this.openDialog( new Date(),this.calendarService.getInterview(event.id));
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
