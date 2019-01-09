import {Component, Input, OnInit} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarPopUpComponent} from '../calendar/calendar-pop-up/calendar-pop-up.component';
import {Interview} from '../calendar/interview-model';
import {InterviewTemplate} from '../shared/templates';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers: [CalendarPopUpComponent]
})
export class AddFormComponent implements OnInit{
  @Input() form:InterviewTemplate;
  @Input() personId:number = 1;
  canInput: boolean;
  currentDate: string;
  selectedDate: Date = new Date();
  people;
  interviewers=[];
  // interview: Interview;
  constructor(private service: TimeLineListService, private calendarService: CalendarService, private popup: CalendarPopUpComponent) {
    this.canInput = true;

  }

  ngOnInit (){
   this.people = this.calendarService.getInterviewers(

   );

   // this.interviewers = this.popup.getInterviewer(event);
   // console.log(this.people);
   // console.log(this.interviewer);

    if ( this.interviewers.length==0) {
      setTimeout(function(){
        $('#interviewerSelect').find('.ng-star-inserted').click();
      }, 10);
    }
  }

  saveEdit() {
    this.canInput = !this.canInput;
    if (!this.canInput) {
      const date = new Date();
      this.form.currentDate = date;
      this.currentDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + " "
        + date.getHours() + ':' + date.getMinutes();
      this.service.sortByDate();
      let interview = new Interview();
      let candidate = this.calendarService.getCandidatesById(this.personId);
      interview.candidateName = candidate.candidateName;
      interview.interviewers = this.interviewers;
      interview.otherContacts = candidate.otherContacts;
      interview.mail = candidate.mail;
      interview.phone = candidate.phone;
      interview.position = candidate.position;

      console.log(this.interviewers);
      interview.date = this.selectedDate;
      interview.candidateSurname = candidate.candidateSurname;
      interview.notes = candidate.notes;
      this.calendarService.saveInterview(interview);
    }

  }

  deleteItem() {
    this.service.deleteForm(this.form);
  }
}
