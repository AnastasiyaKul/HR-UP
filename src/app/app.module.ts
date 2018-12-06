import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotoComponent } from './candidate-info/photo.component';
import { DescComponent } from './candidate-info/desc.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppAddExperienceInfoButtonComponent } from './app-add-experience-info-button/app-add-experience-info-button.component';
import {TimeLineListService} from './shared/time-line-list.service';
import { TimeLineListComponent } from './time-line-list/time-line-list.component';
import { AssignInterviewButtonComponent } from './assign-interview-button/assign-interview-button.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteButtonComponent } from './add-note-button/add-note-button.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AddInfoButtonComponent } from './add-info-button/add-info-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    DescComponent,
    ContactsComponent,
    AppAddExperienceInfoButtonComponent,
    TimeLineListComponent,
    AssignInterviewButtonComponent,
    NotesComponent,
    AddNoteButtonComponent,
    AddFormComponent,
    AddInfoButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    MatRippleModule,
    MatInputModule,
    FileUploadModule
  ],
  providers: [TimeLineListService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
