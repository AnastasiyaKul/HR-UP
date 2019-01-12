import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output, ViewChild, ɵrestoreView} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../calendar/calendar.component';
import {Interview} from '../interview-model';
import {Select2OptionData} from 'ng2-select2';
import{CandidatesService} from '../../shared/candidates.service';
import {CalendarService} from '../calendar.service';
import {CalendarEvent} from 'angular-calendar';
import {InterviewersService} from '../../shared/interviewers.service';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';
import {Interviews} from '../interviews.mock';

@Component({
  selector: 'app-view-interview',
  templateUrl: './view-interview.component.html',
  styleUrls: ['./view-interview.component.css']
})
export class ViewInterviewComponent implements OnInit {
  selectedDate = new Date();
  interviewers = [];
  name;
  surname;
  mail;
  photo;
  phone;
  notes;
  position;
  other;

  constructor(private calendarService: CalendarService,  public dialogRef: MatDialogRef<ViewInterviewComponent>){}

  ngOnInit() {
    let interview: Interview = new Interview();
    for (let i = 0; i < Interviews.length; i++) {
      let candidate = this.calendarService.getCandidatesByName(Interviews[i].candidateName);
       this.name = candidate.candidateName;
       this.surname = candidate.candidateSurname;
       this.mail = candidate.mail;
       this.photo = candidate.photo;
       this.phone = candidate.phone;
       this.other = candidate.otherContacts;
       this.position = candidate.position;
       this.notes = interview.notes = candidate.notes;
       console.log(candidate);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
