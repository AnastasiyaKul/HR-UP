import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CandidatesService} from '../shared/candidates.service';
import {CandidateShortInfo, Positions} from '../vacancies-page/shared/templates';

@Component({
  selector: 'app-desc',
  templateUrl: 'desc.component.html',
  styleUrls: ['desc.component.css'],
})

export class DescComponent implements OnInit {
  positions = [];
  constructor(private fb: FormBuilder,
              private service: CandidatesService) {

    for (const pos in Positions) {
      this.positions.push( pos );
    }
  }
  candidateInfoForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.candidateInfoForm = this.fb.group({
      firstName: [[], Validators.required],
      lastName: [[], Validators.required],
      position: [[], Validators.required],
      phone: [[], Validators.required],
      mail: [],
      otherContacts: []
    });
  }

  createNewCandidate(): void {
    const thisId: number = this.service.candidatesList[this.service.candidatesList.length - 1].id + 1;
    const thisName: string = this.candidateInfoForm.value.firstName;
    const thisSurname: string = this.candidateInfoForm.value.lastName;
    const thisPosition: Positions = this.candidateInfoForm.value.position;
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
