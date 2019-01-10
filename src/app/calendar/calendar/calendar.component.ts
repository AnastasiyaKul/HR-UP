import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, Output, EventEmitter, Input
} from '@angular/core';
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
import { WeekViewAllDayEvent, DayViewEvent } from 'calendar-utils';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';
import {ViewInterviewComponent} from '../view-interview/view-interview.component';
import {ConfirmationService, Message} from 'primeng/api';

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
    }, ConfirmationService
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
  msgs: Message[] = [];

  constructor(private calendarService: CalendarService, public dialog: MatDialog, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.events = this.calendarService.getCalendarEvents();
    console.log(this.events);
    this.refresh.next();
  }

  showEvent(date: Date, data: Interview, candidates: CandidateShortInfo) {
    const dialogForView = this.dialog.open(ViewInterviewComponent, {
    });
    this.events = this.calendarService.getCalendarEvents();
    dialogForView.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.refresh.next();
    });
  }

  openEvent(event: CalendarEvent):void {
    console.log(123);
    console.log(event);
    this.calendarService.getCalendarEvents();
    console.log(this.events);
    let openedInterview: Interview = this.calendarService.getInterview(event.id);
    this.showEvent(new Date(), openedInterview, this.calendarService.getCandidatesPhone());
    console.log(456);
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
      console.log(this.events);
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
    this.openDialog(new Date(),this.calendarService.getInterview(event.id));

  }

  async deleteEvents(id: number) {
    this.confirmationService.confirm({
      icon: 'pi pi-trash',
      message: 'Are you sure want to delete this event?',
      accept: () => {
        this.calendarService.deleteInterview(id);
        // await this.delay(100);
        this.events = this.calendarService.getCalendarEvents();
         this.refresh.next();
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      }
    });
  }
    // if(confirm('Are you sure want to delete? this event' )) {
    //   this.calendarService.deleteInterview(id);
    //   await this.delay(100);
    //   this.events = this.calendarService.getCalendarEvents();
    //   this.refresh.next();
    // }


  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
