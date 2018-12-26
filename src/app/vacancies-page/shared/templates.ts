import {FormArray} from '@angular/forms';

export interface VacancyListItem {
  vacancyName: string;
  vacancyStatus: string;
  vacancyDescription: string;
  requirements: FormArray;
  candidates: CandidateShortInfo[];
}

export interface CandidateShortInfo {
  candidateName: string;
  position: string;
  phone: string;
  mail: string;
  otherContacts: string;
}
