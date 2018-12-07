import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'add-info',
  templateUrl: './add-info-button.component.html',
  styleUrls: ['./add-info-button.component.css']
})
export class AddInfoButtonComponent {

  shown = 0;
  inputText = '';
  constructor() {}

  showInput() {
    this.shown = 1;
  }

  hideInput(){
    this.shown = 0;
  }

  ctrlInput(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }

}
