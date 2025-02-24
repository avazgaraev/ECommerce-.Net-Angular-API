import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent implements OnInit {
constructor(private alertifyService: AlertifyService, private spinner: NgxSpinnerService){ super(spinner)}

  m(){
    this.alertifyService.message("Salam", {messageType: MessageType.Success, position: Position.BottomCenter,delay: 5,dismissOthers: false});
  }
  d(){
    this.alertifyService.dismiss()
  }

    ngOnInit() {
      this.showSpinner();
    }
}
