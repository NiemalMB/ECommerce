import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from './home/home';
import { Aboutus } from "./aboutus/aboutus";
import { Contact } from './contact/contact';
import { Footer } from "./footer/footer";
import { Iphone } from './iphone/iphone';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce');
}
