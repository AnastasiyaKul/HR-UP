import {CandidateShortInfo} from '../vacancies-page/shared/templates';

export class CandidatesService {
  candidatesList: CandidateShortInfo[] = [
    {
      candidateName: 'Mark',
      position: 'Programmer',
      phone: '+375-25-123-4567',
      mail: 'abcdef@gmail.com',
      otherContacts: '+375-25-000-0000'
    },
    {
      candidateName: 'Harry',
      position: 'PHP developer',
      phone: '+375-25-123-4567',
      mail: 'hgik@gmail.com',
      otherContacts: '+375-25-000-0000'
    },
    {
      candidateName: 'George',
      position: 'Business Analyst',
      phone: '+375-25-123-4567',
      mail: 'lmnop@gmail.com',
      otherContacts: '+375-25-000-0000'
    },
    {
      candidateName: 'Marry',
      position: 'Programmer',
      phone: '+375-25-123-4567',
      mail: 'qrst@gmail.com',
      otherContacts: '+375-25-000-0000'
    },
  ];
}
