import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  services = [
    {
      imageSrc: '../../../assets/domestic.jpeg',
      title: 'Domestic Electrician',
      description:
        'The SCV Electrical domestic electrician team provide a wide range of electrical services ranging from lighting installations and rewiring to smart home integrations.'
    },
    {
      imageSrc: '../../../assets/EICR.jpeg',
      title: 'EICR, MWC, EIC',
      description:
        'SCV Electrical provides a comprehensive and efficient electrical certification service ensuring compliance, safety, and reliability for our clients.'
    },
    {
      imageSrc: '../../../assets/Commercial.png',
      title: 'Commercial Electrician',
      description:
        'Our comprehensive commercial electrical offering is designed to address the complex electrical needs of modern businesses, empowering our clients with reliability, safety, and energy efficiency.'
    }
  ];

}
