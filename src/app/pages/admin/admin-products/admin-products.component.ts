import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
  products!:IProduct[]
  constructor(private productSer:ProductsService){
    this.productSer.getAllProducts().subscribe(data=>{
      this.products = data
    })
  }
  onHanndleRemove(id:any){
    this.productSer.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter(item=>item.id != id)
      console.log("Thành công");
      
    })
  }

}
