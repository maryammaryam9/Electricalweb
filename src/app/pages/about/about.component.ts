import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Adil Rehman',
      role: 'Residential Electrician',
      desc: 'Handles domestic wiring, lighting, and safety upgrades.',
      image: '../../../assets/Residential Electrician.jpg',
    },
    {
      name: 'Sara Malik',
      role: 'Solar Technician',
      desc: 'Expert in rooftop solar panel installations and maintenance.',
      image: '../../../assets/Solar Technician.jpg',
    },
    {
      name: 'Usman Qadir',
      role: 'Industrial Electrician',
      desc: 'Experienced in heavy machinery wiring and factory setups.',
      image: '../../../assets/Industrial Electrician.jpg',
    },
    {
      name: 'Naveed Khan',
      role: 'Emergency Response Technician',
      desc: 'Available 24/7 for urgent electrical repairs and system checks.',
      image: '../../../assets/Emergency Response Technician.avif',
    },
  ];
}
