import {Positions} from '../vacancies-page/shared/templates';

export class Interview {
  id?: number;
  candidateName: string;
  candidateSurname: string;
  position: Positions;
  interviewers: string[];
  date:  Date;
  notes?: string;
  phone: string;
  mail: string;
  otherContacts: string;
  photo: string;
}
