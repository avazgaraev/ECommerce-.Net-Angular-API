import { Component } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { CreateProduct } from '../../../../contracts/create_product';
import { BaseComponent } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyOptions, AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent {

  constructor(private spinner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService){
      super(spinner)
  }

  create(name: HTMLInputElement, stock:HTMLInputElement, price: HTMLInputElement){
    this.showSpinner();

    const create_product : CreateProduct = new CreateProduct();
    create_product.Name = name.value;
    create_product.Price = parseFloat(price.value);
    create_product.Stock  = parseInt(stock.value);

    this.productService.create(create_product, ()=>{
      this.hideSpinner()
      this.alertify.message("succcessfully added",{
        position:Position.TopRight,
        messageType:MessageType.Success
      });
    },errorMessage=>{
      this.alertify.message(errorMessage,{
        position:Position.TopRight,
        messageType:MessageType.Error
      })
    });
  }
}
