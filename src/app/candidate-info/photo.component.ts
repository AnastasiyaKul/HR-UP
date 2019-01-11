import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css'],
})
export class PhotoComponent {
  // uploader: FileUploader = new FileUploader(
  //   { url: 'https://www.google.by/search?q=%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82&tbm=isch&tbo=u&source=univ&sa=X&ved=2ahUKEwjRv5OPn97fAhWDyaQKHTKNBkMQsAR6BAgCEAE&biw=1536&bih=674#imgrc=ykYP7AkKHG3RzM:',
  //     removeAfterUpload: false,
  //     autoUpload: true });

  openFile (event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      let dataURL = reader.result;
     let output =(<HTMLImageElement>document.querySelector("#output"));

      if (typeof dataURL === 'string') {
        output.src = dataURL;
      }
    };
    reader.readAsDataURL(input.files[0]);
  };
}
