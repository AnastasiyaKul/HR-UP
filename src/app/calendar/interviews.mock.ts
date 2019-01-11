import {Interview} from './interview-model';
import {Positions} from '../vacancies-page/shared/templates';

export let Interviews: Interview [] = [
  {interviewers:["Alex", "Liza"], candidateName:"Mark", date : new Date("01.07.2019 15:30:00"), id:111,  position:Positions.TS, candidateSurname:"Sloan", phone:'+375 29 783 94 73', mail: 'alex@mail.ru', otherContacts:'+375', notes:'123' }
];
