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

  receivedCandidate;
  receivedInterviewer;
  findName = '';
  interviewer = '';
  selectedSurname;
  selectedPosition;
  selectedNotes;
  selectedPhone;
  selectedCV;
  selectedMail;
  interview: Interview ;
  candidatesData: CandidateShortInfo;
  dateToSet: Date;
  events: CalendarEvent[] = [];
  questioners;
  candidatePhone;
  applicants;
  date: Date = new Date();
  getCandidates(): void {
    this.applicants = this.calendarService.getCandidates();
    console.log(this.applicants);
  }

  getInterviewers() {
    this.questioners = this.calendarService.getInterviewers();
  }

  getCandidatesPhone (){
    this.candidatePhone = this.calendarService.getCandidatesPhone();
    console.log(this.candidatePhone);
  }
  constructor(
    public dialogRef: MatDialogRef<ViewInterviewComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData, private calendarService: CalendarService, private candidatesService: CandidatesService
  ) {

  }

  ngOnInit() {
    this.getCandidates();
    this.getInterviewers();
    this.getCandidatesPhone();
    this.selectedSurname = this.interview.candidateSurname;
    this.selectedPosition = this.interview.position;
    this.selectedNotes = this.interview.notes;
    this.date = this.interview.date;
    this.selectedPhone = this.candidatesData.phone;

      console.log(this.interview);


    }



  onNoClick(): void {
    this.dialogRef.close();
  }

}
