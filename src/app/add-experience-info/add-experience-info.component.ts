import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TimeLineListService} from '../shared/time-line-list.service';

@Component({
  selector: 'app-add-experience-info',
  templateUrl: './add-experience-info.component.html',
  styleUrls: ['./add-experience-info.component.css']
})
export class AddExperienceInfoComponent {
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
    this.service.deleteExperienceForm(this.form);
  }
}
