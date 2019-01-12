import {Interview} from './interview-model';
import {Positions} from '../vacancies-page/shared/templates';

export let Interviews: Interview [] = [
  {interviewers:["Alex", "Liza"], candidateName:"Billy", date : new Date("01.07.2019 15:30:00"), id:111,  position:Positions.TS, candidateSurname:"Sloan", phone:'+375 29 783 94 73', mail: 'alex@mail.ru', otherContacts:'+375', photo:'https://www.google.by/search?q=actors&tbm=isch&tbo=u&source=univ&sa=X&ved=2ahUKEwjertSLtObfAhWxk4sKHWSoCXcQsAR6BAgEEAE&biw=1536&bih=723#imgrc=qja-KLEOuUMdUM:', currentDate:new Date("15:30:00 11.06.2015")  }
];
