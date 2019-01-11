import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  personId: number;
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(p=>  this.personId = p['term']);
  }

  hidden = true;
  isShow () {
    this.hidden = false;
  }
  sub: any;
  data: CandidateShortInfo = {
    id: -1,
    candidateName: '',
    candidateSurname: '',
    position: '',
    phone: '',
    mail: '',
    otherContacts: ''
  };

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.data.id = params['id'] || 0;
        this.data.candidateName = params['candidateName'] || 0;
        this.data.candidateSurname = params['candidateSurname'] || 0;
        this.data.position = params['position'] || 0;
        this.data.phone = params['phone'] || 0;
        this.data.mail = params['mail'] || 0;
        this.data.otherContacts = params['otherContacts'] || 0;
      });
    console.log(this.data);
  }
}
