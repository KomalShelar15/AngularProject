import { Component, OnInit } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  parr:Product[]
  flag:boolean=false;
  pob:Product;
  constructor(private pservice:ProductService) { }

  ngOnInit() {
    this.pservice.getAllProduct()
    .subscribe(result=>this.parr=result);
  }
  displayForm(){
    this.flag=true;
  }
  updateProduct(p:Product){
    this.flag=true;
    this.pob=p;

  }
  deleteProduct(p:Product){
    this.pservice.deleteProduct(p).
    subscribe(result=>this.parr=result);
  }
}
