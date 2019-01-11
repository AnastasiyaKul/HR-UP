import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  personId:number;
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(p=>  this.personId = p['term']);
  }

  hidden = true;
  isShow () {
    this.hidden = false;
  }
}
