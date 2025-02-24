import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { producerAccessed } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
    constructor(private spinner: NgxSpinnerService ,private httpService: HttpClientService){
      super(spinner)
      
    }
  
    ngOnInit() {
      this.showSpinner();

      // this.httpService.get<Product[]>({
      //   controller:"product"
      // }).subscribe(data=>console.log(data));

      // this.httpService.post({
      //   controller:"product"
      // },{
      //   Name:"producttestbyangular",
      //   Stock:100,
      //   Price: 10
      // }).subscribe()

    //   this.httpService.put({
    //     controller: "product"
    //   },{
    //     ID : "019528be-51d9-71c9-b42e-de53a3d1398f",
    //     Name :"UpdatedByAngularName",
    //     Stock: 100,
    //     Price: 10
    //   }).subscribe()

      // this.httpService.delete({
      //   controller: "product"
      // }, "2a06251c-4b74-4109-94c5-f8c1f542412b").subscribe();
  }
}
  
