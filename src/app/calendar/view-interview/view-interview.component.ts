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

@Component({
  selector: 'app-view-interview',
  templateUrl: './view-interview.component.html',
  styleUrls: ['./view-interview.component.css']
})
export class ViewInterviewComponent implements OnInit {
  selectedDate = new Date();
  interviewers = [];


  constructor(private calendarService: CalendarService,  public dialogRef: MatDialogRef<ViewInterviewComponent>){}

  ngOnInit(){
  let  findName = this.calendarService.getCandidates();
 let x = findName.join(',');
 console.log(x);
  console.log(findName);


let interview: Interview = new Interview();
let name = this.calendarService.getCandidatesByName(x);

    console.log(name);
  // console.log(interview);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
