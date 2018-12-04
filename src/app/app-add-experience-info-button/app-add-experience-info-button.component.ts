import { Component } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {ExperienceTemplate} from '../shared/templates';

@Component({
  selector: 'app-app-add-experience-info-button',
  templateUrl: './app-add-experience-info-button.component.html',
  styleUrls: ['./app-add-experience-info-button.component.css']
})
export class AppAddExperienceInfoButtonComponent {
  constructor(private service: TimeLineListService) {}

  onSubmit() {
    this.service.addExperienceForm(new ExperienceTemplate());
  }
}
