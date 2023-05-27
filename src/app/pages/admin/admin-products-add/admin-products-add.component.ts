import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-products-add',
  templateUrl: './admin-products-add.component.html',
  styleUrls: ['./admin-products-add.component.scss']
})
export class AdminProductsAddComponent {
  productForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    price:[0],
    image:[""]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productSer:ProductsService,
    private navigate:Router
    ){}
  onHandleAdd(){
    if(this.productForm.valid){
      const newProduct:IProduct ={
        name:this.productForm.value.name||"",
        price:this.productForm.value.price||0,
        image:this.productForm.value.image||"",
      } 
      this.productSer.addProduct(newProduct).subscribe(data=>{
        console.log("Thành công",data);
        this.navigate.navigate([''])
        
        
      })
    }    
  }
}
