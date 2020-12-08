import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.module';
@Injectable()
export class ProductService{
     baseurl="http://localhost:8082/SpringBootMyRestProductWebService";
    constructor(private httpC:HttpClient){}
    
    getAllProduct():Observable<Product[]>{
        return  this.httpC.get<Product[]>(this.baseurl+"/products");
    }
    addProduct(p:Product):Observable<Product[]>{
        return  this.httpC.post<Product[]>(this.baseurl+"/products",p);     
    }
    updateProduct(p:Product):Observable<Product[]>{
        return  this.httpC.put<Product[]>(this.baseurl+"/products",p);     
    }
    deleteProduct(p:Product):Observable<Product[]>{
        return  this.httpC.delete<Product[]>(this.baseurl+"/products/"+p.pid);     
      }
}
