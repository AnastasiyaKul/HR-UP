import { Component } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-app-add-experience-info-button',
  templateUrl: './app-add-experience-info-button.component.html',
  styleUrls: ['./app-add-experience-info-button.component.css']
})
export class AppAddExperienceInfoButtonComponent {
  constructor(private service: TimeLineListService) {}

  onSubmit() {
    console.log('Form created');
    this.service.addExperienceForm(new FormGroup({
      companyName: new FormControl(''),
      yearsOfWork: new FormControl(''),
      position: new FormControl(''),
      comments: new FormControl('')
    }));
  }
}
