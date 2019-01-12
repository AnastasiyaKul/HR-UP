import { Component, OnInit } from '@angular/core';
import {CandidatesService} from '../../shared/candidates.service';
import {Router} from '@angular/router';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';

@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.css'],
})
export class CandidatesTableComponent implements OnInit {

  constructor(private router: Router,
              private candidatesService: CandidatesService) { }

  ngOnInit() {
  }

  goToCandidateInfo(candidate: CandidateShortInfo) {
    this.router.navigate(['candidate-page', {
        id: candidate.id,
        candidateName: candidate.candidateName,
        candidateSurname: candidate.candidateSurname,
        position: candidate.position,
        phone: candidate.phone,
        mail: candidate.mail,
        otherContacts: candidate.otherContacts,
        mode: 'view'
      }
    ]);
  }
}
