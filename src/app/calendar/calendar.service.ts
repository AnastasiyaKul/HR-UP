import { Injectable } from '@angular/core';
import {candidates} from './candidate.mock';
import {Select2OptionData} from 'ng2-select2';
import {Interview} from './interview-model';
import {Interviews} from './interviews.mock';
import {CalendarEvent} from 'angular-calendar';
import {startOfDay} from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  candidateNames;

  constructor() {
  }


  getCandidates() {
    return this.candidateNames = candidates.map(candidates => candidates.name) as any | Array<Select2OptionData>;
  }

  getInterview(id: number | string): Interview {
    return Interviews.filter(x => x.id == id)[0];
  }

  deleteInterview(id: number) {
    let e = this.getInterview(id);
    let i = Interviews.indexOf(e);
    if (i > 0) {
      Interviews.splice(i, 1);
    }
  }

  saveInterview(data: Interview) {
    data.id = Math.max.apply(Math, Interviews.map(function (o) {
      return o.id;
    })) + 1;
    Interviews.push(data);
  }

  getCalendarEvents(): CalendarEvent[] {
    let res: CalendarEvent[] = [];
    for (let i = 0; i < Interviews.length; i++) {
      let event: CalendarEvent = {
        start: startOfDay(Interviews[i].date),
        title: 'Interview with ' + Interviews[i].name + ' ' + Interviews[i].surname + ' ' + Interviews[i].date.getHours().toString() + ':' + Interviews[i].date.getMinutes().toString(),
        color: this.colors.yellow,
        id: Interviews[i].id
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
