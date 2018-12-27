import { Component } from '@angular/core';
import {VacanciesService} from '../../shared/vacancies.service';
import {VacancyListItem} from '../shared/templates';
import {MatDialog} from '@angular/material';
import {VacancyEditComponent} from '../../vacancy-page/vacancy-edit/vacancy-edit.component';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent {
  vacancies: VacancyListItem[] = [];
  showOpened: boolean = true;
  showSuspended: boolean = true;
  showCanceled: boolean = true;
  showClosed: boolean = true;
  refresh: Subject<any> = new Subject();

  constructor(private service: VacanciesService,
              public dialog: MatDialog){
    for (let serviceElement of this.service.vacanciesList) {
      this.vacancies.push(serviceElement);
    }
  }

  openDialog(title: string) {
    const dialogRef = this.dialog.open(VacancyEditComponent, {
      width: '650px',
      data: {dialogTitle: title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.vacancies);
      console.log(result);
      if (result) {
        this.vacancies = this.service.vacanciesList;
        this.statusToShow();
        this.refresh.next();
      }
    });
  }

  toggle(vacancyStatus: string) {
    switch (vacancyStatus) {
      case 'opened': this.showOpened = !this.showOpened; break;
      case 'suspended': this.showSuspended = !this.showSuspended; break;
      case 'canceled': this.showCanceled = !this.showCanceled; break;
      case 'closed': this.showClosed = !this.showClosed; break;
    }
  }

  statusToShow() {
    let shownVacancies: VacancyListItem[] = [];

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
