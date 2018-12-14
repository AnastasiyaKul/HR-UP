import {CandidateShortInfo, VacancyListItem} from './templates';

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
  candidatesList2: CandidateShortInfo[] = [
    {
      candidateName: 'SampleText',
      contacts: '+375-25-123-0000',
      dateOfRegistration: new Date()
    },
    {
      candidateName: 'SampleText',
      contacts: '+375-29-789-7792',
      dateOfRegistration: new Date()
    },
    {
      candidateName: 'SampleText',
      contacts: '+375-33-654-1482',
      dateOfRegistration: new Date()
    }
  ];

  vacanciesList: VacancyListItem[] = [
    {
      vacancyName: 'Programmer',
      vacancyStatus: 'opened',
      candidates: this.candidatesList1
    },
    {
      vacancyName: 'Whatever',
      vacancyStatus: 'closed',
      candidates: this.candidatesList2
    }
  ];
}
