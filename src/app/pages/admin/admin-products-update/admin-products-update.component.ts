import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import {FormBuilder,Validators} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products-update',
  templateUrl: './admin-products-update.component.html',
  styleUrls: ['./admin-products-update.component.scss']
})
export class AdminProductsUpdateComponent {
  product!:IProduct
  productForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    price:[0],
    image:[""]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productSer:ProductsService,
    private router:ActivatedRoute,
    private navigate:Router

    ){
      this.router.paramMap.subscribe(param=>{
        const id = Number(param.get("id"))
        this.productSer.getProductById(id).subscribe(product=>{
          this.product = product
          this.productForm.patchValue({
            name:product.name,
            price:product.price,
            image:product.image,

          })
        })
      })
    }
    onHandleUpdate(){
      if(this.productForm.valid){
        const newProduct:IProduct={
          id:this.product.id,
          name:this.productForm.value.name||"",
          price:this.productForm.value.price||0,
          image:this.productForm.value.image||"",
        }
        this.productSer.updateProduct(newProduct).subscribe(data=>{
          console.log("Thành công",data);
          this.navigate.navigate([''])
          
        })
      }
    }
}
