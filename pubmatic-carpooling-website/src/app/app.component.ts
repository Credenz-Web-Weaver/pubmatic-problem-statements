import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pubmatic Carpooling';

  links = [
    { path: '/', title: 'Home' },
    { path: '/rides', title: 'Rides' },
    { path: '/drivers', title: 'Drivers' },
    { path: '/passengers', title: 'Passengers' }
  ];
}
