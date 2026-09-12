import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListProduct } from '../../../../contracts/list-product';
import { MatPaginator } from '@angular/material/paginator';
import { BaseComponent } from '../../../../base/base.component';
import { ProductService } from '../../../../services/common/models/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(private productService: ProductService, spinner: NgxSpinnerService, private alertify: AlertifyService){
    super(spinner)
  }
  displayedColumns: string[] = ['name', 'price', 'stock', 'createdDate', 'updatedDate', 'edit', 'delete'];
  dataSource : MatTableDataSource<ListProduct> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts(){  
    const allproducts: {totalNumber:number;products: ListProduct[]}= 
    await this.productService.read(this.paginator ?  this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, 
      ()=>this.hideSpinner(), 
    (errorMessage)=>{
      this.alertify.message(errorMessage,{
        position: Position.TopRight,
        messageType:MessageType.Error
      })
    })
    this.dataSource = new MatTableDataSource<ListProduct>(allproducts.products);
    this.paginator.length = allproducts.totalNumber
  }

  async pageChanged(){
    await this.getProducts();
  }

  async ngOnInit() {
    await this.getProducts();
  }
}

// p.Id,
// p.Price,
// p.Name,
// p.Stock,
// p.CreatedDate,
// p.UpdatedDate