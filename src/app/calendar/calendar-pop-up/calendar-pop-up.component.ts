import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../calendar/calendar.component';
import {Interview} from '../interview-model';
import {Select2OptionData} from 'ng2-select2';
import {candidates} from '../candidate.mock';
import {CalendarService} from '../calendar.service';
import {endOfDay, startOfDay} from 'date-fns';
import {Subject} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';

@Component({
  selector: 'app-calendar-pop-up',
  templateUrl: './calendar-pop-up.component.html',
  styleUrls: ['./calendar-pop-up.component.css']
})
export class CalendarPopUpComponent implements OnInit {

  receivedCandidate;
  findName;
  selectedSurname;
  selectedPosition;
  selectedNotes;
  candidates: Position[];
  interview: Interview;

  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();

  applicants: Array<Select2OptionData>;

  getCandidates(): void {
    this.applicants = this.calendarService.getCandidates();
    console.log(this.applicants);
  }

  ngOnInit() {
    this.getCandidates();
    console.log(this.interview);
    if (this.interview != undefined) {
      let selectedName = this.applicants.filter(x => x.toString() == this.interview.name)[0];
      const index = this.applicants.indexOf(selectedName, 0);
      if (index > -1) {
        this.applicants.splice(index, 1);
      }
      this.applicants.unshift(selectedName);

      //this.findName = this.interview.name;
      this.selectedSurname = this.interview.surname;
      this.selectedPosition = this.interview.position;
      this.selectedNotes = this.interview.notes;
      this.date = this.interview.date;
    }
  }

//timepicker
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false
  };


  constructor(
    public dialogRef: MatDialogRef<CalendarPopUpComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData, private calendarService: CalendarService) {

    this.interview = this.data.interview;

    console.log(this.data);
  }

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

  addInterview(): void {
    this.events.push({
      title: 'Interview with ' + this.findName,
      start: this.date,
      // color: colors.yellow,
      draggable: true
    });
    this.refresh.next();

    if (this.interview != undefined) {
      let event = {
        id: this.interview.id,
        surname: this.selectedSurname,
        name: this.findName,
        date: this.date,
        notes: this.selectedNotes,
        position: this.selectedPosition
      };
      this.calendarService.deleteInterview(event.id);
      this.calendarService.saveInterview(event);
    }
    else {
      this.calendarService.saveInterview({
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


