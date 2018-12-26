import { Component, OnInit } from '@angular/core';
import {CandidatesService} from '../../shared/candidates.service';

@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.css']
})
export class CandidatesTableComponent implements OnInit {

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit() {
  }

}
