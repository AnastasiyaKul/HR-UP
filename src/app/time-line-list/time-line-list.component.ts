import { Component } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {InterviewTemplate} from '../shared/templates';

@Component({
  selector: 'app-time-line-list',
  templateUrl: './time-line-list.component.html',
  styleUrls: ['./time-line-list.component.css']
})
export class TimeLineListComponent {
  forms: InterviewTemplate[];
  constructor(private service: TimeLineListService){
    this.forms = this.service.getformsArray();
  }
}
