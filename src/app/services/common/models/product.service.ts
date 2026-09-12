import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from '../../../contracts/create_product';
import { HttpClientService } from '../http-client.service';
import { __values } from 'tslib';
import { error } from 'console';
import { ListProduct } from '../../../contracts/list-product';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClientService) { }

  create(product: CreateProduct, successCallBack?:any, errorCallBack?:(errorMessage: string)=>void){
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
  async read(page: number =0, size:number = 5, successCallBack?:any, errorCallBack?:(errorMessage: string)=>void) : Promise<{totalNumber:number;products: ListProduct[]}>{
    const promiseData : Promise<{totalNumber:number;products: ListProduct[]}>= lastValueFrom(this.httpClient.get({
      controller:"product",
      queryString:`page=${page}&size=${size}`
    }));

    promiseData.then(d=>{ 
      console.log(d)
      successCallBack})
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
  }

  async delete(id: string){
    const deletedData :Observable<any> =  this.httpClient.delete({
      controller:"product"
    },id)
    await firstValueFrom(deletedData)
  }

}
