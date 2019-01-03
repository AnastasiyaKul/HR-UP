import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CandidatesService} from '../shared/candidates.service';
import {CandidateShortInfo} from '../vacancies-page/shared/templates';

@Component({
  selector: 'app-desc',
  templateUrl: 'desc.component.html',
  styleUrls: ['desc.component.css'],
})

export class DescComponent implements OnInit {
  candidateInfoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private service: CandidatesService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.candidateInfoForm = this.fb.group({
      firstName: [],
      lastName: [],
      position: [],
      phone: [],
      mail: [],
      otherContacts: []
    });
  }

  createNewCandidate(): void {
    const thisId: number = this.service.candidatesList[this.service.candidatesList.length - 1].id + 1;
    const thisName: string = this.candidateInfoForm.value.firstName;
    const thisSurname: string = this.candidateInfoForm.value.lastName;
    const thisPosition: string = this.candidateInfoForm.value.position;
    const thisPhone: string = this.candidateInfoForm.value.phone;
    const thisMail: string = this.candidateInfoForm.value.mail;
    const thisOtherContacts: string = this.candidateInfoForm.value.otherContacts;

    const candidate: CandidateShortInfo = {
      id: thisId,
      candidateName: thisName,
      candidateSurname: thisSurname,
      position: thisPosition,
      phone: thisPhone,
      mail: thisMail,
      otherContacts: thisOtherContacts
    };

    this.service.candidatesList.push(candidate);
    console.log(candidate);
  }
}
