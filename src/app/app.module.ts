import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CreateItemTextComponent,
  TextPopupComponent
} from "./text-popup/create-item-text.component";

import { PhotoComponent } from './candidate-info/photo.component';
import { DescComponent } from './candidate-info/desc.component';
import { InputDialogComponent, InputDialogWindow} from './inputdialog.component';
import {MatDialogClose, MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    CreateItemTextComponent,
    TextPopupComponent,
    PhotoComponent,
    DescComponent,
    InputDialogComponent,
    InputDialogWindow

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
    TextPopupComponent,
    InputDialogWindow
  ]
})
export class AppModule { }
