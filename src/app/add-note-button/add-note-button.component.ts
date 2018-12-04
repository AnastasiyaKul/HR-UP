import { Component, OnInit } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.css']
})
export class AddNoteButtonComponent implements OnInit {

  constructor(private service: TimeLineListService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.addNoteForm(new FormGroup({
      when: new FormControl(''),
      author: new FormControl(''),
      note: new FormControl('')
    }));
  }

}
