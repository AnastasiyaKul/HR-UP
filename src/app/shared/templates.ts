import {FormControl, FormGroup} from '@angular/forms';

export class InterviewTemplate {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      when: new FormControl(''),
      where: new FormControl(''),
      whoConducts: new FormControl(''),
      comments: new FormControl('')
    })
  }
}

export class ExperienceTemplate {
  form: FormGroup;
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
  constructor() {
    this.form = new FormGroup({
      when: new FormControl(''),
      author: new FormControl(''),
      note: new FormControl('')
    })
  }
}
