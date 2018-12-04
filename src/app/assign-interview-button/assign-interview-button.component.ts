import { Component } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-assign-interview-button',
  templateUrl: './assign-interview-button.component.html',
  styleUrls: ['./assign-interview-button.component.css']
})
export class AssignInterviewButtonComponent {
  constructor(private service: TimeLineListService) {}

  onSubmit() {
    this.service.addInterviewForm(new FormGroup({
      when: new FormControl(''),
      where: new FormControl(''),
      whoConducts: new FormControl(''),
      comments: new FormControl('')
    }));
  }
}

