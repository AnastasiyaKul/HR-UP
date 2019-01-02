import {Injectable, Input, TemplateRef} from '@angular/core';
//import {candidates} from './candidate.mock';
import {Select2OptionData} from 'ng2-select2';
import {Interview} from './interview-model';
import {Interviews} from './interviews.mock';
import {CalendarEvent, CalendarEventAction} from 'angular-calendar';
import {addDays, addHours, endOfDay, endOfHour, startOfDay, startOfHour, startOfToday} from 'date-fns';
import {CandidatesService} from '../shared/candidates.service';
import {InterviewersService} from '../shared/interviewers.service';



@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  @Input() cellTemplate: TemplateRef<any>;

  candidateNames;
  interviewersNames;
  candidates = new CandidatesService();
  interviewers = new InterviewersService();
  constructor() {}


  getCandidates() {
    return this.candidateNames = this.candidates.candidatesList.map(candidates => candidates.candidateName) as any | Array<Select2OptionData>;
  }

  getInterviewers() {
    return this.interviewersNames = this.interviewers.interviewers.map(interviewers => interviewers.name);
  }

  getInterview(id: number | string): Interview {
    return Interviews.filter(interview => interview.id == id)[0];
  }

  deleteInterview(id: number) {
    let evnt = this.getInterview(id);
    let index = Interviews.indexOf(evnt);
    if (index >= 0) {
      Interviews.splice(index, 1);
    }
  }

  static saveInterview(data: Interview) {
    if (Interviews.length==0){
      data.id = 1;
    }
    else {
    data.id = Math.max.apply(Math, Interviews.map(function (o) {
      return +o.id;
    })) + 1;
    }
    Interviews.push(data);
    Interviews.sort((a,b)=> +new Date(a.date)- +new Date(b.date));
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
endEvent = new Date();
  getCalendarEvents(): CalendarEvent[] {
    let res: CalendarEvent[] = [];
    for (let i = 0; i < Interviews.length; i++) {
      let tempDate = new Date(Interviews[i].date);
      let event: CalendarEvent = {
        start: startOfHour(startOfHour(Interviews[i].date)),
        end: endOfHour(endOfHour(Interviews[i].date)),
        title: 'Interview with ' + Interviews[i].candidateName + ' ' + Interviews[i].candidateSurname + ' ' + this.addZero(tempDate.getHours()) + ':' + this.addZero(tempDate.getMinutes()),
        color: this.colors.yellow,
        id: Interviews[i].id,
        draggable: true,

      };
      res.push(event);

    }
    return res;

  }

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
}
