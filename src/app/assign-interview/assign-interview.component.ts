import {Component, Input} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-assign-interview',
  templateUrl: './assign-interview.component.html',
  styleUrls: ['./assign-interview.component.css']
})
export class AssignInterviewComponent {
  @Input() form: FormGroup;
  canInput: boolean;
  currentDate: string;

  constructor(private service: TimeLineListService) {
    this.canInput = true;
  }

  onSubmit() {
    this.canInput = !this.canInput;
    if (!this.canInput) {
      const date = new Date();
      this.currentDate = date.getDate() + '.' + (date.getMonth() + 1)+ '.' + date.getFullYear() + " "
                       + date.getHours() + ':' + date.getMinutes();
    }
  }
}
