import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Aboutus } from './aboutus/aboutus';
import { Contact } from './contact/contact';
import { Iphone } from './iphone/iphone';
import { Card } from './card/card';

export const routes: Routes = [
     {path: 'home', component: Home},
      {path: 'product', component: Product},
       {path: 'aboutus', component: Aboutus},
        {path: 'contact', component: Contact},
        {path: 'product-details/:id', component: Iphone}
       
];
