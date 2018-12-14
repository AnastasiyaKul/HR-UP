export interface VacancyListItem {
  vacancyName: string;
  vacancyStatus: string;
  candidates: CandidateShortInfo[];
}

export interface CandidateShortInfo {
  candidateName: string;
  contacts: string;
  dateOfRegistration: Date;
}
