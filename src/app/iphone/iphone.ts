import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api-service/api-service';

@Component({
  selector: 'app-iphone',
  imports: [],
  templateUrl: './iphone.html',
  styleUrl: './iphone.css',
})
export class Iphone {
  product: any;
  id: any;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef, private ar: ActivatedRoute) {}

  ngOnInit(){
    this.id = this.ar.snapshot.params['id'];
    this.api.getSingleProduct(this.id).subscribe((res:any)=> {
        this.product = res;
      this.cdr.detectChanges();
    })
    

  }
}
