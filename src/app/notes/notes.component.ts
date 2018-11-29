import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor() {
  }

  notes = [];

  ngOnInit() {
  }

  addNote(note) {
    this.notes.push(note);
  }
}
