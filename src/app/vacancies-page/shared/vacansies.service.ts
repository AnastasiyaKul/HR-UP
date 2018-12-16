import {CandidateShortInfo, VacancyListItem} from './templates';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

export class VacanciesService {
  candidatesList1: CandidateShortInfo[] = [
    {
      candidateName: 'Mark',
      contacts: '+375-25-123-4567',
      dateOfRegistration: new Date()
    },
    {
      candidateName: 'John',
      contacts: '+375-29-789-7592',
      dateOfRegistration: new Date()
    },
    {
      candidateName: 'SampleText',
      contacts: '+375-33-654-1682',
      dateOfRegistration: new Date()
    }
  ];

  vacanciesList: VacancyListItem[] = [
    {
      vacancyName: 'Programmer',
      vacancyStatus: 'opened',
      vacancyDescription: 'Nothing to say...',
      requirements: new FormArray([
        new FormGroup({
          reqName: new FormControl(''),
          isRequire: new FormControl(false),
          isPublic: new FormControl(false)
        })
        ]
      ),
      candidates: this.candidatesList1
    }
  ];

  addVacancy(item: VacancyListItem) {
    this.vacanciesList.push(item);
  }
}
