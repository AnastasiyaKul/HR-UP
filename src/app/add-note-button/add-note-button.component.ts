import { Component } from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {NoteTemplate} from '../shared/templates';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.css']
})
export class AddNoteButtonComponent {

  constructor(private service: TimeLineListService) { }

  onSubmit() {
    this.service.addNoteForm(new NoteTemplate());
  }
}
