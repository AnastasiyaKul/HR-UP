import {Component, OnInit} from '@angular/core';
import {Positions} from '../../vacancies-page/shared/templates';
import {CandidatesService} from '../../shared/candidates.service';

@Component({
  selector: 'app-candidate-filter',
  templateUrl: './candidate-filter.component.html',
  styleUrls: ['./candidate-filter.component.css']
})
export class CandidateFilterComponent implements OnInit {

  candidatesList = [];
  constructor(serv: CandidatesService) {
    for (const pos in Positions) {
      this.positions.push( pos );
    }

    this.candidatesList = serv.candidatesList;
  }
  positions = [];
  filteredPositions = [];
  filteredCandidates = [];

  ngOnInit() {
  }

  // filterCandidates() {
  //   for (let i = 0; i <= this.filteredPositions; i++) {
  //     for (let j = 0; j <= this.candidatesList; j++) {
  //       if (this.candidatesList[j].position === this.filteredPositions[i]) {
  //         this.filteredCandidates.push(this.candidatesList[j]);
  //       }
  //     }
  //   }
  //   console.log(this.filteredCandidates);
  // }
}
