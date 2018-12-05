import {FormGroup} from '@angular/forms';
import {ExperienceTemplate, InterviewTemplate, NoteTemplate} from './templates';

export class TimeLineListService {
  formsArray = [];

  addInterviewForm(listItem: InterviewTemplate) {
    this.formsArray.unshift(listItem);
  }

  addExperienceForm(listItem: ExperienceTemplate) {
    this.formsArray.unshift(listItem);
  }

  addNoteForm(listItem: NoteTemplate) {
    this.formsArray.unshift(listItem);
  }

  deleteForm(listItem) {
    let index = this.formsArray.indexOf(listItem);

    if (index > -1) {
      this.formsArray.splice(index, 1);
    }
  }

  sortByDate(){
    this.formsArray.sort(function(a,b){
      return new Date(b.currentDate) - new Date(a.currentDate);
    });
  }
}
