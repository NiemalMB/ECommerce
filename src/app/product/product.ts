import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../card/card";
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api-service/api-service';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  data: any[] = [];
  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(){
    this.api.getAllproducts().subscribe((res: any)=>{
      this.data = res;
      this.cdr.detectChanges();
    })
    }
  


  // data: any[] = [
  //   {Title:"iphone",
  //     description: "trusted second hand phone",
  //     price: "30,500",
  //     image:"https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg"
  //   },
  //   {Title:"Pixel",
  //     description: "trusted second hand phone",
  //     price: "60,000",
  //     image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7Jit8jBUKX57E8yPNGMca9BQuct7KZDlRT2JwC7PUCJCNud4YnkmS_jMP3szpfJ9yYs6Lyf1CXcWPEZZkbxlk_fjI0uJGFA"
  //   },
  //    {Title:"Samsung",
  //     description: "trusted second hand phone",
  //     price: "26,000",
  //     image:"https://m.media-amazon.com/images/I/41dyJ3ps0zL._SY300_SX300_QL70_FMwebp_.jpg"
  //   },
  // ]
  
}
