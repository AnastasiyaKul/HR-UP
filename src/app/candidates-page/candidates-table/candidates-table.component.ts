import { Component, OnInit } from '@angular/core';
import {CandidatesService} from '../../shared/candidates.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.css'],
})
export class CandidatesTableComponent implements OnInit {

  constructor(private candidatesService: CandidatesService, private router: Router) { }
  goToCandidate(candidateId:number){
    this.router.navigate(['candidate', candidateId]);
  }
  ngOnInit() {
  }

}
