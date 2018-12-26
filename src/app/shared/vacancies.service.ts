import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {CandidatesService} from './candidates.service';
import {VacancyListItem} from '../vacancies-page/shared/templates';

@Injectable()
export class VacanciesService {
  constructor(private service: CandidatesService) {
    for (let i = 0; i < this.vacanciesList.length; i++) {
      for (let j = 0; j < this.service.candidatesList.length; j++) {
        if( this.service.candidatesList[j].position == this.vacanciesList[i].vacancyName) {
          this.vacanciesList[i].candidates.push(this.service.candidatesList[j]);
        }
      }
    }
  }

  vacanciesList: VacancyListItem[] = [
    {
      vacancyName: 'Programmer',
      vacancyStatus: 'opened',
      vacancyDescription: 'Nothing to say... Sample text Sample text Sample text Sample text Sample text',
      requirements: new FormArray([
          new FormGroup({
            reqName: new FormControl(''),
            isRequire: new FormControl(false),
            isPublic: new FormControl(false)
          })
        ]
      ),
      candidates: []
    },
    {
      vacancyName: 'PHP developer',
      vacancyStatus: 'closed',
      vacancyDescription: 'Nothing to say... Sample text Sample text Sample text',
      requirements: new FormArray([
          new FormGroup({
            reqName: new FormControl(''),
            isRequire: new FormControl(false),
            isPublic: new FormControl(false)
          })
        ]
      ),
      candidates: []
    },
    {
      vacancyName: 'Business Analyst',
      vacancyStatus: 'opened',
      vacancyDescription: 'Nothing to say... Sample text Sample text Sample text',
      requirements: new FormArray([
          new FormGroup({
            reqName: new FormControl(''),
            isRequire: new FormControl(false),
            isPublic: new FormControl(false)
          })
        ]
      ),
      candidates: []
    }
  ];

  addVacancy(item: VacancyListItem) {
    this.vacanciesList.push(item);
  }
}
