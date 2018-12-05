import {Component, Input, OnInit} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  @Input() form: FormGroup;
  canInput: boolean;
  currentDate: string;

  constructor(private service: TimeLineListService) {
    this.canInput = true;
  }

  saveEdit() {
    this.canInput = !this.canInput;
    if (!this.canInput) {
      const date = new Date();
      this.currentDate = date.getDate() + '.' + (date.getMonth() + 1)+ '.' + date.getFullYear() + " "
        + date.getHours() + ':' + date.getMinutes();
    }
  }

  deleteItem() {
    this.service.deleteNotesForm(this.form);
  }
}
