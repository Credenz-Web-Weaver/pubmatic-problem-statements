import { Component, Input } from '@angular/core';
import { Ride } from '../ride.model';

@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.css']
})
export class RideCardComponent {
  @Input() ride: Ride = {} as Ride;


}
