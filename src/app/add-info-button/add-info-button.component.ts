import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-add-info-button',
  templateUrl: './add-info-button.component.html',
  styleUrls: ['./add-info-button.component.css']
})
export class AddInfoButtonComponent {

  @Input() name: string;

  openInput(){
    const e = document.getElementById('row');
    e.style.display = 'block';
  }

}
