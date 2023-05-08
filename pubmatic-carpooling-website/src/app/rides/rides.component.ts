import { Component } from '@angular/core';

interface Ride {
  id: number;
  driver: string;
  car: string;
  seats: number;
  date: string;
  pickup: string;
  destination: string;
  totalSeats: number;
}

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {
  rides: Ride[] = [
    { id: 1, pickup: 'San Francisco', destination: 'San Jose', date: '2023-05-07', car: 'alto', driver: 'John Smith', totalSeats: 4, seats: 3 },
    { id: 2, pickup: 'Oakland', destination: 'Palo Alto', date: '2023-05-08', car: 'alto', driver: 'Jane Doe', totalSeats: 4, seats: 2 },
    { id: 3, pickup: 'Berkeley', destination: 'Mountain View', date: '2023-05-09', car: 'alto', driver: 'Bob Johnson', totalSeats: 4, seats: 1 }
  ];
}

// id: number;
// driver: string;
// car: string;
// seats: number;
// date: string;
// pickup: string;
// destination: string;
// totalSeats: number;