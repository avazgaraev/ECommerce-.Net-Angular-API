import { Directive, ElementRef, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from '../../base/base.component';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';
declare var $: any

@Directive({
  selector: '[appDelete]',
  standalone: false
})
export class DeleteDirective  {

  constructor(private element: ElementRef, 
    private httpService: HttpClientService, 
    private _renderer: Renderer2, 
    private spinner: NgxSpinnerService,
  public dialog: MatDialog,
private alertify: AlertifyService) {
    
    const img = this._renderer.createElement("img");
    img.setAttribute("src", "assets/delete.png")
    img.setAttribute("style", "cursor:pointer")
    img.width = 25
    img.height = 25;
    _renderer.appendChild(element.nativeElement,img)

   }
   @Input() id: string
   @Input() controller: string
   @Output() callback  : EventEmitter<any> = new EventEmitter()

   @HostListener("click")
    async onclick(){
      this.openDialog( async ()=>{
        this.spinner.show()
        setTimeout(()=>{
          this.spinner.hide()
        },1500)
        const nativeElement : HTMLTableCellElement = this.element.nativeElement;
        //await this.productService.delete(this.id)
        this.httpService.delete({
          controller:this.controller
        },this.id).subscribe(()=>{
          $(nativeElement.parentElement).animate({
            opacity: 0,
            left:"+=50",
            height:"toggle"
          }, 700, ()=>{
            this.callback.emit();
            this.alertify.message("Successfully deleted",{
              messageType: MessageType.Success,
              position:Position.TopRight
            })
          })
        },(errorResponse: HttpErrorResponse)=>{
          this.spinner.hide();
          this.alertify.message("Unexpected error",{
            messageType: MessageType.Error,
            position:Position.TopRight})
        
          })
          })
          
        
      }
    
    openDialog(afterClosed: any): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width:"250px",

        data: DeleteState.Yes,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result==DeleteState.Yes){
          afterClosed()
        }
      });
    }
  

}
