import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotoComponent } from './candidate-info/photo.component';
import { DescComponent } from './candidate-info/desc.component';
import {InputDialogComponent, InputDialogWindow} from './inputdialog/inputdialog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    DescComponent,
    InputDialogComponent,
    InputDialogWindow,
    ContactsComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    MatRippleModule,
    MatInputModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputDialogWindow
  ]
})
export class AppModule { }
