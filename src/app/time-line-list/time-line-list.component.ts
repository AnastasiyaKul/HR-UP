import { Component } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';

@Component({
  selector: 'app-time-line-list',
  templateUrl: './time-line-list.component.html',
  styleUrls: ['./time-line-list.component.css']
})
export class TimeLineListComponent {
  constructor(private service: TimeLineListService){}
}
