import {ExperienceTemplate, InterviewTemplate, NoteTemplate} from './templates';
import {NotesComponent} from '../notes/notes.component';
import {Interview} from '../calendar/interview-model';
import {Interviews} from '../calendar/interviews.mock';
import {CalendarService} from '../calendar/calendar.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
 let formsArray: InterviewTemplate[] = [];
 let expirienceArray: ExperienceTemplate[] = [];
 let notesArray: NoteTemplate[] = [];


 @Injectable()
export class TimeLineListService {
  constructor(private calendarService: CalendarService){

  }

  getformsArray(): InterviewTemplate[]{
    let res : InterviewTemplate[]=[];
    for (let i = 0; i<Interviews.length; i++){
      let candidate = this.calendarService.getCandidatesByName(Interviews[i].candidateName);
      let template: InterviewTemplate = new InterviewTemplate(candidate.id);
      template.personId= candidate.id;
        template.currentDate = Interviews[i].date;
            template.form=new FormGroup({
            when: new FormControl(Interviews[i].date),
            whoConducts: new FormControl(Interviews[i].interviewers),
            comments: new FormControl(Interviews[i].notes)
          });
      res.push(template);
    }
    for (let j=0; j<formsArray.length; j++){
      res.push(formsArray[j]);
    }
    return res;
  }

  addInterviewForm(listItem: InterviewTemplate) {

   formsArray.push(listItem);
    console.log(formsArray);
  }

  addExperienceForm(listItem: ExperienceTemplate) {
    expirienceArray.unshift(listItem);
  }

  addNoteForm(listItem: NoteTemplate) {
    notesArray.unshift(listItem);
  }

  deleteForm(listItem) {
    let index = formsArray.indexOf(listItem);

    if (index > -1) {
     formsArray.splice(index, 1);
    }
  }

  sortByDate(){
    formsArray.sort(function(a,b){
      if (a.currentDate === undefined || b.currentDate === undefined) return 0;
      return b.currentDate.getTime() - a.currentDate.getTime();
    });
  }
}
