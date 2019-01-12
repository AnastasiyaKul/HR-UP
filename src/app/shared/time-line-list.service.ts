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
 let formsArray = [];

 @Injectable()

 export class TimeLineListService {
     constructor(private calendarService: CalendarService){
  }

  clearEmptyForms()
  {
    interviewArray = [];
  }

  getFormsArray(_personId: number): FormGroup[]{
    console.log(_personId);
    let res: FormGroup[]=[];
    for (let i = 0; i<Interviews.length; i++){
      let candidate = this.calendarService.getCandidatesByName(Interviews[i].candidateName);
      console.log(candidate);
      if (candidate.id == _personId) {
        let template: InterviewTemplate = new InterviewTemplate(candidate.id, Interviews[i].id);
        template.currentDate = Interviews[i].date;
        template.form = new FormGroup({
          currentDate: new FormControl(Interviews[i].currentDate),
          personId: new FormControl(candidate.id),
          recordId: new FormControl(Interviews[i].id),
          when: new FormControl(Interviews[i].date),
          whoConducts: new FormControl(Interviews[i].interviewers),
          comments: new FormControl(Interviews[i].notes)
        });
        console.log(template.form);
        res.push(template.form);
      }
      else {

      }
    }
    for (let j=0; j<interviewArray.length; j++){
      if (j<1)
      {
      res.push(new FormGroup({
        personId: new FormControl(_personId),
        recordId: new FormControl(0),
        when: new FormControl(new Date()),
        whoConducts: new FormControl([]),
        comments: new FormControl('')
      }));
      }
    }
    console.log('arr');
    console.log(formsArray);
    for (let j=0; j<formsArray.length; j++){
      res.push(formsArray[j]);
    }

    return res;
  }

  addInterviewForm(listItem: InterviewTemplate, _personId: number) {
      interviewArray.unshift(listItem);

  }

  addExperienceForm(listItem: FormGroup) {
    formsArray.unshift(listItem);
  }

  addNoteForm(listItem: FormGroup) {
    formsArray.unshift(listItem);
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
