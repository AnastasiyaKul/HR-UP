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
    {
      id: 5,
      candidateName: 'Bob',
      candidateSurname: 'Twist',
      position: Positions.Vue,
      phone: '+375-25-125-ч1524',
      mail: 'Twist@gmail.com',
      otherContacts: 'no',
      notes: 'Good man'
    },
    {
      id: 6,
      candidateName: 'Billy',
      candidateSurname: 'Parker',
      position: Positions.CSS,
      phone: '+375-33-321-5560',
      mail: 'Parkerb@gmail.com',
      otherContacts: 'Parker Billy - Skype',
      notes: 'forgot about the job interview'
    },
    {
      id: 7,
      candidateName: 'Steve',
      candidateSurname: 'Jobs',
      position: Positions.Vue,
      phone: '+375-29-321-0077',
      mail: 'Jobslol@gmail.com',
      otherContacts: 'no',
      notes: ''
    },
    {
      id: 8,
      candidateName: 'Anna',
      candidateSurname: 'Pott',
      position: Positions.Angular,
      phone: '+375-25-721-5990',
      mail: 'AnnaPott@gmail.com',
      otherContacts: 'Anna Pott - fb',
      notes: 'Everything cool'
    },
    {
      id: 9,
      candidateName: 'Larry',
      candidateSurname: 'King',
      position: Positions.React,
      phone: '+375-25-125-0124',
      mail: 'orughoug@gmail.com',
      otherContacts: 'no',
      notes: 'Good man'
    },
    {
      id: 10,
      candidateName: 'Mark',
      candidateSurname: 'Poster',
      position: Positions.Angular,
      phone: '+375-25-321-4587',
      mail: 'abcdefrg@gmail.com',
      otherContacts: '',
      notes: 'Stupid'
    },
  ];
}
