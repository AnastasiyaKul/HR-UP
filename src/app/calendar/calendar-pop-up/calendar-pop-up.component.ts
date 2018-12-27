import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output, ɵrestoreView} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../calendar/calendar.component';
import {Interview} from '../interview-model';
import {Select2OptionData} from 'ng2-select2';
//import {candidates} from '../candidate.mock';
import{CandidatesService} from '../../shared/candidates.service';
import {CalendarService} from '../calendar.service';
import {endOfDay, startOfDay} from 'date-fns';
import {Subject} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';
import {Settings} from 'angular2-datetimepicker/interface';
import {DatePipe, formatDate} from '@angular/common';
import {InterviewersService} from '../../shared/interviewers.service';

@Component({
  selector: 'app-calendar-pop-up',
  templateUrl: './calendar-pop-up.component.html',
  styleUrls: ['./calendar-pop-up.component.css']
})
export class CalendarPopUpComponent implements OnInit {

  receivedCandidate;
  receivedInterviewer;
  findName = '';
  interviewer = '';
  selectedSurname;
  selectedPosition;
  selectedNotes;
  interview: Interview ;
  dateToSet: Date;
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  questioners;
  applicants: Array<Select2OptionData>;

  getCandidates(): void {
    this.applicants = this.calendarService.getCandidates();
    console.log(this.applicants);

  }

  getInterviewers() {
    this.questioners = this.calendarService.getInterviewers();
  }

  constructor(
    public dialogRef: MatDialogRef<CalendarPopUpComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData, private calendarService: CalendarService
    ) {

    this.interview = this.data.interview;
    if (this.interview != null)
    {
      this.findName = this.interview.candidateName;
      this.interviewer = this.interview.interviewer;
    }

    this.dateToSet = this.data.date;
    console.log(this.data);
  }

  ngOnInit() {
    this.getCandidates();
    this.getInterviewers();
    console.log(this.interview);
    if (this.interview !== undefined && this.interview !== null) {
      let selectedName = this.applicants.filter(x => x.toString() === this.interview.candidateName)[0];
      const index = this.applicants.indexOf(selectedName, 0);
      if (index > -1) {
        this.applicants.splice(index, 1);
      }
      this.applicants.unshift(selectedName);

      this.selectedSurname = this.interview.candidateSurname;
      this.selectedPosition = this.interview.position;
      this.selectedNotes = this.interview.notes;
      this.date = this.interview.date;

      console.log(this.interview);


    }
    else {
    this.date = this.dateToSet;
      if (this.findName == ''&& this.interviewer == '')
      {
        setTimeout(function(){
          $('#applicantSelect, #interviewerSelect').find('.ng-star-inserted').click();
        }, 10);
      }
     //this.date = new Date(formatDate(this.dateToSet, 'M/d/yy', this.locale));
    }
  }


  date: Date = new Date();

  onNoClick(): void {
    this.dialogRef.close();
  }
candidates = new CandidatesService();

  changed(event) {
    this.findName = event.value;

    console.log(this.findName);

    this.receivedCandidate = this.candidates.candidatesList.find(obj => obj.candidateName == this.findName);
    console.log(this.receivedCandidate);

    this.selectedSurname = this.receivedCandidate.candidateSurname;
    this.selectedPosition = this.receivedCandidate.position;
    this.selectedNotes = this.receivedCandidate.notes;

  }
interviewers = new InterviewersService();
  getInterviewer(event) {
    this.interviewer = event.value;
    console.log(this.interviewer);
    this.receivedInterviewer = this.interviewers.interviewers.find(obj => obj.name == this.interviewer);
  }

  addInterview() {
    if (this.interview != undefined && this.interview != null) {
      let event = {
        id: this.interview.id,
        candidateSurname: this.selectedSurname,
        candidateName: this.findName,
        interviewer: this.interviewer,
        date: this.date,
        notes: this.selectedNotes,
        position: this.selectedPosition
      };

       this.calendarService.deleteInterview(event.id);
       CalendarService.saveInterview(event);
    }
    else {
      CalendarService.saveInterview({
        candidateSurname: this.selectedSurname,
        candidateName: this.findName,
        interviewer: this.interviewer,
        date: this.date,
        notes: this.selectedNotes,
        position: this.selectedPosition
      });

    }
    console.log(this.events);

  }

}


