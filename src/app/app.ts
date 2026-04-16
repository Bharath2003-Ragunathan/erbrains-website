import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent], 
  templateUrl: './app.html'
})
export class App {}