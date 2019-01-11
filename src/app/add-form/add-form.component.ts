import {Component, Input, OnInit} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarPopUpComponent} from '../calendar/calendar-pop-up/calendar-pop-up.component';
import {Interview} from '../calendar/interview-model';
import {InterviewTemplate} from '../shared/templates';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  @Input() form:InterviewTemplate;
  personId:number;
  canInput: boolean;
  currentDate: string;
  selectedDate: Date = new Date();
  people;
  interviewers = [];
  notes: string;
  constructor(private service: TimeLineListService, private calendarService: CalendarService) {
    this.canInput = false;
  }

  ngOnInit (){
   this.people = this.calendarService.getInterviewers();
   this.personId = this.form.personId;
   this.interviewers = this.form.form.value.whoConducts;
   this.selectedDate = this.form.form.value.when;
   this.notes = this.form.form.value.comments;
   this.currentDate = this.form.form.value.when;
   //console.log(this.form.form.value.whoConducts);
    if ( this.interviewers.length==0) {
      setTimeout(function(){
        //$('#interviewerSelect, #interviewerSelect2').find('.ng-star-inserted').click();
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
      let candidate = this.calendarService.getCandidatesById(this.personId);
      let interview =
      {
        candidateName : candidate.candidateName,
        interviewers : this.interviewers,
        otherContacts : candidate.otherContacts,
        mail : candidate.mail,
        phone : candidate.phone,
        photo : candidate.photo,
        position : candidate.position,
        date : this.selectedDate,
        candidateSurname : candidate.candidateSurname,
        notes : this.notes
      };
      this.calendarService.saveInterview(interview);
      console.log(interview);

    }

  }

  deleteItem() {
    this.service.deleteForm(this.form);
  }
}
