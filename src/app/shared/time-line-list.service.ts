import {FormGroup} from '@angular/forms';

export class TimeLineListService {
  experienceArray = [];
  interviewArray = [];

  addExperienceForm(listItem: FormGroup) {
    this.experienceArray.push(listItem);
  }

  addInterviewForm(listItem: FormGroup) {
    this.interviewArray.push(listItem);
  }
}
