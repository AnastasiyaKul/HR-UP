import {Component, Inject, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {VacanciesService} from '../../shared/vacancies.service';
import {DialogData} from '../../calendar/calendar/calendar.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {VacancyListItem} from '../../vacancies-page/shared/templates';

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
  newVacancy: VacancyListItem;

  isInactive = false;

  constructor(private fb: FormBuilder,
              private service: VacanciesService,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public dialogRef: MatDialogRef<VacancyEditComponent>) { }

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
      isRequire: false,
      isPublic: false,
    });
  }

  addRequirement(): void {
    this.requirements = this.vacancyEdit.get('requirements') as FormArray;
    this.requirements.push(this.createRequirement());
  }

  onSave() {
    this.newVacancy = {
      vacancyName: this.vacancyEdit.get('vacancyName').value,
      vacancyStatus: this.vacancyEdit.get('vacancyStatus').value,
      vacancyDescription: this.vacancyEdit.get('vacancyDescription').value,
      requirements: this.vacancyEdit.get('requirements').value,
      candidates: []
    };

    this.service.addVacancy(this.newVacancy);
    this.dialogRef.close(this.newVacancy);
  }
}
