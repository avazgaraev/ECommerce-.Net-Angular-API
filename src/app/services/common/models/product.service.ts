import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from '../../../contracts/create_product';
import { HttpClientService } from '../http-client.service';
import { __values } from 'tslib';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClientService) { }

  create(product: CreateProduct, successCallBack?:any, errorCallBack?:any){
    this.httpClient.post({
      controller:"product"
    },product).subscribe(result=>{
      successCallBack();
    },(errorResponse: HttpErrorResponse)=>{
      const _error :Array<{key: string, value: Array<string>}> = errorResponse.error;
      let message = "";
      _error.forEach((_value, _index) => {
        _value.value.forEach((value, index) => {
          message += `${value}`
        });
      });
      errorCallBack(message);
    });
  }
}
