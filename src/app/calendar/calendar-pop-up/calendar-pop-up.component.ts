import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../calendar/calendar.component';
import {Interview} from '../interview-model';
import {Select2OptionData} from 'ng2-select2';
import {candidates} from '../candidate.mock';
import {CalendarService} from '../calendar.service';
import {endOfDay, startOfDay} from 'date-fns';
import {Subject} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';
import {Settings} from 'angular2-datetimepicker/interface';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-calendar-pop-up',
  templateUrl: './calendar-pop-up.component.html',
  styleUrls: ['./calendar-pop-up.component.css']
})
export class CalendarPopUpComponent implements OnInit {

  receivedCandidate;
  findName = '';
  selectedSurname;
  selectedPosition;
  selectedNotes;
  candidates: Position[];
  interview: Interview ;
  dateToSet: Date;
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();

  applicants: Array<Select2OptionData>;

  getCandidates(): void {
    this.applicants = this.calendarService.getCandidates();
    console.log(this.applicants);
  }

  constructor(
    public dialogRef: MatDialogRef<CalendarPopUpComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData, private calendarService: CalendarService, private datePipe: DatePipe,
    @Inject(LOCALE_ID) private locale: string
    ) {

    this.interview = this.data.interview;
    if (this.interview != null)
    {
      this.findName = this.interview.name;
    }

    this.dateToSet = this.data.date;
    console.log(this.data);
  }

  ngOnInit() {
    this.getCandidates();
    console.log(this.interview);
    if (this.interview !== undefined && this.interview !== null) {
      let selectedName = this.applicants.filter(x => x.toString() === this.interview.name)[0];
      const index = this.applicants.indexOf(selectedName, 0);
      if (index > -1) {
        this.applicants.splice(index, 1);
      }
      this.applicants.unshift(selectedName);

      this.selectedSurname = this.interview.surname;
      this.selectedPosition = this.interview.position;
      this.selectedNotes = this.interview.notes;
      this.date = this.interview.date;

      console.log(this.interview);


    }
    else {
    this.date = this.dateToSet;
      if (this.findName=='')
      {
        setTimeout(function(){
          $('#applicantSelect').find('.ng-star-inserted').click();
        }, 10);
      }
     //this.date = new Date(formatDate(this.dateToSet, 'M/d/yy', this.locale));
    }
  }


  date: Date = new Date();

  onNoClick(): void {
    this.dialogRef.close();
  }

  changed(event) {
    this.findName = event.value;
    console.log(this.findName);

    this.receivedCandidate = candidates.find(obj => obj.name == this.findName);
    console.log(this.receivedCandidate);

    this.selectedSurname = this.receivedCandidate.surname;
    this.selectedPosition = this.receivedCandidate.position;
    this.selectedNotes = this.receivedCandidate.notes;

  }

  addInterview() {
    if (this.interview != undefined && this.interview != null) {
      let event = {
        id: this.interview.id,
        surname: this.selectedSurname,
        name: this.findName,
        date: this.date,
        notes: this.selectedNotes,
        position: this.selectedPosition
      };

       this.calendarService.deleteInterview(event.id);
       CalendarService.saveInterview(event);
    }
    else {
      CalendarService.saveInterview({
        surname: this.selectedSurname,
        name: this.findName,
        date: this.date,
        notes: this.selectedNotes,
        position: this.selectedPosition
      });

    }
    console.log(this.events);

  }

}


