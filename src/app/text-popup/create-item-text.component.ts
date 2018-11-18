import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  data: string;
}

@Component({
  selector: 'app-create-item-text',
  templateUrl: 'create-item-text.html',
  styleUrls: ['create-item-text.css'],
})
export class CreateItemTextComponent {

  data: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TextPopupComponent, {
      width: '250px',
      data: {name: this.name, data: this.data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }

}

@Component({
  selector: 'app-create-item-text-popup',
  templateUrl: 'popup.html',
})
export class TextPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<TextPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
