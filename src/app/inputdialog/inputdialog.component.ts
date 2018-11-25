import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  inputrow: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'inputdialog',
  templateUrl: 'inputdialog.component.html',
  styleUrls: ['inputdialog.component.css'],
})
export class InputDialogComponent {

  inputrow: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InputDialogWindow, {
      width: '250px',
      data: {inputrow: this.inputrow}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.inputrow = result;
    });
  }

}

@Component({
  selector: 'inputdialogwindow',
  templateUrl: 'inputdialogwindow.html',
})
export class InputDialogWindow {

  constructor(
    public dialogRef: MatDialogRef<InputDialogWindow>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
