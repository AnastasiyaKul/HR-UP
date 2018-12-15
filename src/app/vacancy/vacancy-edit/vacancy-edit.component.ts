import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

interface Requirement {
  reqName: string;
  isRequire: boolean;
  isPublic: boolean;
}

@Component({
  selector: 'app-vacancy-edit',
  templateUrl: './vacancy-edit.component.html',
  styleUrls: ['./vacancy-edit.component.css']
})
export class VacancyEditComponent implements OnInit {
  vacancyEdit: FormGroup;
  requirements: FormArray;

  isInactive = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.vacancyEdit = this.fb.group({
      vacancyName: '',
      vacancyStatus: '',
      vacancyDescription: '',
      requirements: this.fb.array([this.createRequirement()])
    });
  }

  createRequirement() {
    return this.fb.group({
      reqName: '',
      isRequire: '',
      isPublic: '',
    });
  }

  addRequirement(): void {
    this.requirements = this.vacancyEdit.get('requirements') as FormArray;
    this.requirements.push(this.createRequirement());
  }

}
