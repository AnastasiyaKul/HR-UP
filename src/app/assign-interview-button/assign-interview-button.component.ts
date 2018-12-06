import { Component } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {InterviewTemplate} from '../shared/templates';

@Component({
  selector: 'app-assign-interview-button',
  templateUrl: './assign-interview-button.component.html',
  styleUrls: ['./assign-interview-button.component.css']
})
export class AssignInterviewButtonComponent {
  constructor(private service: TimeLineListService) {}

  onSubmit() {
    this.service.addInterviewForm(new InterviewTemplate());
  }
}

