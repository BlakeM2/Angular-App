import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HouseListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'House Browser';
}
