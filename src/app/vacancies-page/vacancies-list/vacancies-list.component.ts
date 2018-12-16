import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../shared/vacansies.service';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent implements OnInit {

  constructor(private service: VacanciesService){}

  ngOnInit() {
  }


}
