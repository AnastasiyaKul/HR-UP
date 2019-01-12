import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TimeLineListService} from '../../shared/time-line-list.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  personId:number;
  constructor(private route: ActivatedRoute, private service: TimeLineListService){
    this.route.params.subscribe(p=>  this.personId = p['term']);
    this.service.clearEmptyForms();
  }

  hidden = true;
  isShow () {
    this.hidden = false;
  }
}
