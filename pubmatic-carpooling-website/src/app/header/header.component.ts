import { Component } from '@angular/core';

interface Link {
  title: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links: Link[] = [
    { title: 'Home', path: '/home' },
    { title: 'Rides', path: '/rides' },
    { title: 'Drivers', path: '/drivers' },
    { title: 'Passengers', path: '/passengers' }
  ];
}
