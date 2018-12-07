import {Component} from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: 'desc.component.html',
  styleUrls: ['desc.component.css'],
})

export class DescComponent {
  name = '';
  position = '';

  getNameFromInput(inputText: string) {
    this.name = inputText;
  }

  getPositionFromInput(inputText: string) {
    this.position = inputText;
  }
}
