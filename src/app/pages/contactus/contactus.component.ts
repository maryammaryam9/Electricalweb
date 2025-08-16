import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  zoom = 13;

  // Centering on Faisalabad
  center: google.maps.LatLngLiteral = {
    lat: 31.4166,
    lng: 73.0711
  };
}
