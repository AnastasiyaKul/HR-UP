import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css'],
})
export class PhotoComponent {
  uploader: FileUploader = new FileUploader(
    { url: 'http://virtserver.swaggerhub.com/ksenya96/hr_api/1.0.0/candidate/{candidateId}/uploadAttachment',
      removeAfterUpload: false,
      autoUpload: true });
}
