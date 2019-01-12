import {Component, HostBinding, Input, OnInit} from '@angular/core';
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
  recordId: number;
  personId: number;
  canInput: boolean;
  currentDate: string;
  destroyed: boolean = false;
  selectedDate: Date = new Date();
  people;
  interviewers = [];
  notes: string;
  constructor(private service: TimeLineListService, private calendarService: CalendarService) {
    this.canInput = true;
  }

  ngOnInit (){
   this.people = this.calendarService.getInterviewers();
   this.personId = this.form.form.value.personId;
    this.recordId = this.form.form.value.recordId;
   this.interviewers = this.form.form.value.whoConducts;
    if (this.interviewers.length>0)
    {
      this.canInput = false;
    }
   this.selectedDate = this.form.form.value.when;
   this.notes = this.form.form.value.comments;
   this.currentDate = this.form.form.value.when;
    if ( this.interviewers.length==0) {
      setTimeout(function(){
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
      console.log(candidate);
      let interview = {
        id: this.recordId,
        candidateName : candidate.candidateName,
        interviewers : this.interviewers,
        otherContacts : candidate.otherContacts,
        mail : candidate.mail,
        phone : candidate.phone,
        photo : candidate.photo,
        position : candidate.position,
        date : this.selectedDate,
        candidateSurname : candidate.candidateSurname,
        notes : candidate.notes
      };
      this.calendarService.deleteInterview(this.recordId);
      this.calendarService.saveInterview(interview);
      console.log(this.recordId);
      }

   //this.service.addInterviewForm(this.form,this.personId);
  }

  private fontWeight = "normal";
  deleteItem() {
    this.calendarService.deleteInterview(this.recordId);
    this.destroyed = true;
    this.fontWeight = "none";
  }

  @HostBinding("style.display") get getFontWeight(){

    return this.fontWeight;
  }


}
