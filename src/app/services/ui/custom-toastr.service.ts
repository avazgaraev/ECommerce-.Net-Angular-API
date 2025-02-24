import { Injectable } from '@angular/core';
import e from 'express';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }
  message(message: string, title: string, options: Partial<ToastrOptions> ){
    this.toastr[options.messageType](message, title,{
      timeOut:options.timeoutToastr,
      positionClass: options.positionToastr,
      disableTimeOut:options.disableTimeOut
    });  
  }
}

export class ToastrOptions{
  messageType: ToastrMessageType;
  timeoutToastr: number;
  positionToastr: ToastrPosition;
  disableTimeOut:boolean = false;
}

export enum ToastrMessageType{
  Success= "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPosition{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  TopLeft = "toast-top-left",
  BottomLeft = "toast-bottom-left",
  TopCenter="toast-top-center",
  BottomCenter = "toast-bottom-center"
}