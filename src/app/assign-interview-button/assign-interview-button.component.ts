import {Component, Input} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {InterviewTemplate} from '../shared/templates';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assign-interview-button',
  templateUrl: './assign-interview-button.component.html',
  styleUrls: ['./assign-interview-button.component.css']
})
export class AssignInterviewButtonComponent {
  constructor(private service: TimeLineListService, private router: Router) {}
  @Input() personId:number;
  onSubmit() {
    this.service.addInterviewForm(new InterviewTemplate(this.personId));
    // this.router.navigate(['candidate', this.personId]);
  }
}

