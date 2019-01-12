import {ExperienceTemplate, InterviewTemplate, NoteTemplate} from './templates';
import {NotesComponent} from '../notes/notes.component';
import {Interview} from '../calendar/interview-model';
import {Interviews} from '../calendar/interviews.mock';
import {CalendarService} from '../calendar/calendar.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

 let interviewArray: InterviewTemplate[] = [];
 let experienceArray: ExperienceTemplate[] = [];
 let notesArray: NoteTemplate[] = [];
 //let formsArray = [];

 @Injectable()

 export class TimeLineListService {
     constructor(private calendarService: CalendarService){
  }


  clearEmptyForms()
  {
    interviewArray = [];
  }

  getFormsArray(_personId: number): InterviewTemplate[]{
    console.log(_personId);
    let res: InterviewTemplate[]=[];
    for (let i = 0; i<Interviews.length; i++){
      let candidate = this.calendarService.getCandidatesByName(Interviews[i].candidateName);
      console.log(candidate);
      if (candidate.id == _personId) {
        let template: InterviewTemplate = new InterviewTemplate(candidate.id, Interviews[i].id);
        template.tabId = 1;
        template.recordId = Interviews[i].id;
        template.personId = candidate.id;
        template.currentDate = Interviews[i].date;
        template.form = new FormGroup({
          personId: new FormControl(candidate.id),
          recordId: new FormControl(Interviews[i].id),
          when: new FormControl(Interviews[i].date),
          whoConducts: new FormControl(Interviews[i].interviewers),
          comments: new FormControl(Interviews[i].notes)
        });
        res.push(template);
      }
      else {

      }
    }
    for (let j=0; j<interviewArray.length; j++){
      res.push(interviewArray[j]);
    }
    return res;
  }

  addInterviewForm(listItem: InterviewTemplate, _personId: number) {
     listItem.personId = _personId;
      interviewArray.push(listItem);
      console.log(interviewArray);

  }

  addExperienceForm(listItem: ExperienceTemplate) {
    experienceArray.unshift(listItem);

  }

  addNoteForm(listItem: NoteTemplate) {
    notesArray.unshift(listItem);


  }

  deleteForm(listItem) {
    //    console.log(formsArray);
    //
    // for (let i = 0, L = formsArray.length; i < L; i++) {
    //   let index = formsArray[i].indexOf(listItem);
    //   console.log(index);
    //   if (index > -1) {
    //     formsArray.splice(index, 1);
    //   }
      //   if (j >= 0) {
      //     return [i, j];
      //   };
    }
    //let index = formsArray.indexOf(listItem);



  sortByDate(){
  //   formsArray.sort(function(a,b){
  //     if (a.currentDate === undefined || b.currentDate === undefined) return 0;
  //     return b.currentDate.getTime() - a.currentDate.getTime();
  //   });
   }
}
