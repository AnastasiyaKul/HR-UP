import {Component, OnInit} from '@angular/core';
import {Positions} from '../../vacancies-page/shared/templates';
import {CandidatesService} from '../../shared/candidates.service';

@Component({
  selector: 'app-candidate-filter',
  templateUrl: './candidate-filter.component.html',
  styleUrls: ['./candidate-filter.component.css']
})
export class CandidateFilterComponent implements OnInit {

  constructor() {
    for (const pos in Positions) {
      this.positions.push( pos );
    }
  }
  positions = [];
  filteredPositions = [];

  ngOnInit() {
  }
}
