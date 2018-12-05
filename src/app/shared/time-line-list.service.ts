import {FormGroup} from '@angular/forms';
import {ExperienceTemplate, InterviewTemplate, NoteTemplate} from './templates';

export class TimeLineListService {
  experienceArray: FormGroup[] = [];
  interviewArray: FormGroup[] = [];
  notesArray: FormGroup[] = [];

  addInterviewForm(listItem: InterviewTemplate) {
    this.interviewArray.push(listItem.form);
  }

  addExperienceForm(listItem: ExperienceTemplate) {
    this.experienceArray.push(listItem.form);
  }

  addNoteForm(listItem: NoteTemplate) {
    this.notesArray.push(listItem.form);
  }

  deleteInterviewForm(listItem: FormGroup) {
    let index = this.interviewArray.indexOf(listItem);

    if (index > -1) {
      this.interviewArray.splice(index, 1);
    }
  }

  deleteExperienceForm(listItem: FormGroup) {
    let index = this.experienceArray.indexOf(listItem);

    if (index > -1) {
      this.experienceArray.splice(index, 1);
    }
  }

  deleteNotesForm(listItem: FormGroup) {
    let index = this.notesArray.indexOf(listItem);

    if (index > -1) {
      this.notesArray.splice(index, 1);
    }
  }
}
