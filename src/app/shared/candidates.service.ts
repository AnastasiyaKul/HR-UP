import {CandidateShortInfo} from '../vacancies-page/shared/templates';

export class CandidatesService {
  candidatesList: CandidateShortInfo[] = [
    {
      id: 1,
      candidateName: 'Mark',
      candidateSurname: 'Steve',
      position: 'Programmer',
      phone: '+375-25-123-4567',
      mail: 'abcdef@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Stupid'
    },
    {
      id: 2,
      candidateName: 'Harry',
      candidateSurname: 'Potter',
      position: 'PHP developer',
      phone: '+375-25-123-4567',
      mail: 'hgik@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Kind man'
    },
    {
      id: 3,
      candidateName: 'George',
      candidateSurname: 'Klein',
      position: 'Business Analyst',
      phone: '+375-25-123-4567',
      mail: 'lmnop@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Cool boy'
    },
    {
      id: 4,
      candidateName: 'Marry',
      candidateSurname: 'Parker',
      position: 'Programmer',
      phone: '+375-25-123-4567',
      mail: 'qrst@gmail.com',
      otherContacts: '+375-25-000-0000',
      notes: 'Good girl'
    },
  ];
}
