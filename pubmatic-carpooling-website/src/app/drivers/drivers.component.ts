import { Component } from '@angular/core';

interface Driver {
  id: number;
  name: string;
  car: string;
  rating: number;
}

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  drivers: Driver[] = [
    { id: 1, name: 'John Smith', car: 'Honda Civic', rating: 4.5 },
    { id: 2, name: 'Jane Doe', car: 'Toyota Camry', rating: 4.2 },
    { id: 3, name: 'Bob Johnson', car: 'Tesla Model S', rating: 4.8 }
  ];
}
