import {CandidateShortInfo} from '../vacancies-page/shared/templates';
import {Positions} from '../vacancies-page/shared/templates';

export class CandidatesService {
  candidatesList: CandidateShortInfo[] = [
    {
      id: 1,
      candidateName: 'Mark',
      candidateSurname: 'Steve',
      position: Positions.Angular,
      phone: '+375-25-123-4567',
      mail: 'abcdef@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Stupid'
    },
    {
      id: 2,
      candidateName: 'Harry',
      candidateSurname: 'Potter',
      position: Positions.React,
      phone: '+375-25-120-4562',
      mail: 'hgik@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Kind man'
    },
    {
      id: 3,
      candidateName: 'George',
      candidateSurname: 'Klein',
      position: Positions.TS,
      phone: '+375-25-123-4463',
      mail: 'lmnop@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Cool boy'
    },
    {
      id: 4,
      candidateName: 'Marry',
      candidateSurname: 'Parker',
      position: Positions.PHP,
      phone: '+375-25-123-4547',
      mail: 'qrst@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Good girl'
    },
  ];
}
