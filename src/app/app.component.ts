import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/alertify.service';
import { timeout } from 'rxjs';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'EShoppingClient';

  constructor(private toastrService: CustomToastrService){
    
  }

  ngOnInit(): void {
    // $.get("https://localhost:7272/api/Product", data=>{
    //   console.log(data);
    // })
  }

  showToastr(){
    this.toastrService.message("salam", "hamiya", {
      messageType:ToastrMessageType.Error,
      positionToastr:ToastrPosition.BottomRight,
      timeoutToastr:1000,
    });
  }
}

// $.get("https://localhost:7272/api/Product", data=>{
//   console.log(data);
// })

// $(document).ready(function(){
//   console.log("hi");
// })