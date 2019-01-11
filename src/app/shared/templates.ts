import {FormControl, FormGroup} from '@angular/forms';

export class InterviewTemplate {
  form: FormGroup;
  currentDate: Date;
  personId: number;
  constructor(_personId:number) {
    this.personId = _personId;
    this.form = new FormGroup({
      when: new FormControl(new Date()),
      whoConducts: new FormControl(''),
      comments: new FormControl('')
    })
  }
}

export class ExperienceTemplate {
  form: FormGroup;
  currentDate: Date;
  constructor() {
    this.form = new FormGroup({
      companyName: new FormControl(''),
      yearsOfWork: new FormControl(''),
      position: new FormControl(''),
      comments: new FormControl('')
    })
  }
}

export class NoteTemplate {
  form: FormGroup;
  currentDate: Date;
  constructor() {
    this.form = new FormGroup({
      when: new FormControl(''),
      author: new FormControl(''),
      note: new FormControl('')
    })
  }
}
