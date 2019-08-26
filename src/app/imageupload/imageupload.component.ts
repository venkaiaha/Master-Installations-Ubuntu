import { Component, OnInit } from '@angular/core';

function readBase64(file): Promise<any> {
  var reader = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);
    // reader.readAsArrayBuffer(file);
    // reader.readAsBinaryString(file);
    reader.readAsDataURL(file);
    // reader.readAsText(file);
  });
  return future;
}

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {
  // readURL:;
  selectFile(event: any) {
    
    // this.readURL(event.target);
    console.log(event);
    var b64=readBase64(event.target.files[0]);
    console.log(b64);
    // b64.split(';')[1].split(',')[1]

  }


  constructor() { }

  ngOnInit() {
  }

}
