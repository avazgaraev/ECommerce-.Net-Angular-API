import { Component } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  public files: NgxFileDropEntry[];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const formdata: FormData = new FormData;
    for(let file in files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        formdata.append(_file.name, _file,file.relativePath)
      })
    }
  }
}
