import { Component, OnInit } from '@angular/core';
import {VacanciesService} from '../../shared/vacancies.service';
import {VacancyListItem} from '../shared/templates';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent {
  vacancies: VacancyListItem[];
  showOpened: boolean;
  showSuspended: boolean;
  showCanceled: boolean;
  showClosed: boolean;

  constructor(private service: VacanciesService){
    this.vacancies = [];
    for (let serviceElement of this.service.vacanciesList) {
      this.vacancies.push(serviceElement);
    }
    this.showOpened = true;
    this.showSuspended = true;
    this.showCanceled = true;
    this.showClosed = true;
  }

  statusToShow(vacancyStatus: string) {
    let shownVacancies: VacancyListItem[] = [];

    switch (vacancyStatus) {
      case 'opened': this.showOpened = !this.showOpened; break;
      case 'suspended': this.showSuspended = !this.showSuspended; break;
      case 'canceled': this.showCanceled = !this.showCanceled; break;
      case 'closed': this.showClosed = !this.showClosed; break;
    }

    if (this.showOpened) {
      for (let i = 0; i < this.service.vacanciesList.length; i++) {
        if( this.service.vacanciesList[i].vacancyStatus == 'opened') {
          shownVacancies.push(this.service.vacanciesList[i]);
        }
      }
    }

    if (this.showSuspended) {
      for (let i = 0; i < this.service.vacanciesList.length; i++) {
        if( this.service.vacanciesList[i].vacancyStatus == 'suspended') {
          shownVacancies.push(this.service.vacanciesList[i]);
        }
      }
    }

    if (this.showCanceled) {
      for (let i = 0; i < this.service.vacanciesList.length; i++) {
        if( this.service.vacanciesList[i].vacancyStatus == 'canceled') {
          shownVacancies.push(this.service.vacanciesList[i]);
        }
      }
    }

    if (this.showClosed) {
      for (let i = 0; i < this.service.vacanciesList.length; i++) {
        if( this.service.vacanciesList[i].vacancyStatus == 'closed') {
          shownVacancies.push(this.service.vacanciesList[i]);
        }
      }
    }

    this.vacancies = shownVacancies;
  }
}
