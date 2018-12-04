import {FormGroup} from '@angular/forms';

export class TimeLineListService {
  experienceArray = [];
  interviewArray = [];
  notesArray = [];

  addExperienceForm(listItem: FormGroup) {
    this.experienceArray.push(listItem);
  }

  addInterviewForm(listItem: FormGroup) {
    this.interviewArray.push(listItem);
  }

  addNoteForm(listItem: FormGroup) {
    this.notesArray.push(listItem);
  }
}
