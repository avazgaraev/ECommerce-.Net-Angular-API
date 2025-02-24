import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {
  
  constructor(private spinnerService: NgxSpinnerService) {
    

  }

  showSpinner(){
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  hideSpinner(){
    this.spinnerService.hide();
  }
}
