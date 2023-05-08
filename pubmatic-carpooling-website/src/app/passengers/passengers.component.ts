import { Component } from '@angular/core';

interface Passenger {
  id: number;
  name: string;
  rating: number;
}

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent {
  passengers: Passenger[] = [
    { id: 1, name: 'Alice Lee', rating: 4.3 },
    { id: 2, name: 'Bob Chen', rating: 4.1 },
    { id: 3, name: 'Charlie Zhang', rating: 4.7 }
  ];
}
