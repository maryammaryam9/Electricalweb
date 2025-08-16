import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  // 👷 Technician Section
  technicianSection = {
    heading: 'Our Electrical Technicians',
    intro: `Our call-out electricians are NCIEC registered, City & Guilds trained, and Part P certified.
Customer satisfaction remains a cornerstone of our operations for commercial and domestic repairs.
At London Electricians 24/7, we prioritise honesty, professionalism, and affordable pricing — starting from just £75 per hour.`,

    features: [
      'Neat, clean & uniformed for safety and security',
      'Friendly, helpful & reliable — we treat your home like our own',
      'Knowledgeable, experienced & skilled electricians',
      'Rigorously trained in customer service',
      'Health & Safety trained and certified',
      'Equipped with tools & stocked with huge inventory of parts',
    ],

    closing: `We provide a wide range of electrical services to both domestic and commercial customers across Harrow and surrounding areas. From small odd jobs to large scale projects — we've got you covered.`,
  };

  // ⚡ Full Service List (with headings, paragraphs, and items)
  services = [
    {
      heading: 'Electrical Installations',
      paragraph: 'We offer a full range of domestic and commercial electrical installations including new circuits, sockets, and lighting systems. Our installations are always certified and meet all UK regulations.',
      items: [
        'Light fittings',
        'Cookers',
        'Water heaters',
        'Towel rails',
        'Electric showers',
        'Kitchen appliances',
        'Recessed lighting',
        'Dedicated circuits'
      ]
    },
    {
      heading: 'Electrical Removals',
      paragraph: 'Our qualified electricians can safely remove or disconnect any existing wiring or fixtures including old appliances, lights, and sockets as part of home upgrades or renovations.',
      items: [
        'Removing old fittings',
        'Safe disconnection of appliances',
        'Ceiling rose replacements',
        'Old outdoor lights removal'
      ]
    },
    {
      heading: 'Electrical Repairs',
      paragraph: 'We are available 24/7 for emergency repairs and general maintenance, ensuring your home or business stays safe and powered at all times.',
      items: [
        'Fuse box repair',
        'RCD replacement',
        'Short circuit repairs',
        'Tripping issue diagnosis',
        'Wiring fault finding',
        'Earthing and bonding',
        'Immersion & water heater repair'
      ]
    },
    {
      heading: 'Lighting',
      paragraph: 'From LED installations to exterior and garden lighting, we provide full lighting design, installation, and repair solutions.',
      items: [
        'LED dimmer switches',
        'Bathroom lighting',
        'Outdoor security lights',
        'Faulty garden lighting',
        'Chandelier fitting',
        'Waterproof bathroom lights'
      ]
    },
    {
      heading: 'Consumer Units & Upgrades',
      paragraph: 'Upgrading or repairing your fuse board and ensuring surge protection and earthing is vital for safety and compliance.',
      items: [
        'Fuseboard upgrades',
        'Consumer unit testing',
        'Main switch replacement (BG 100A)',
        'Earthing and bonding',
        'Surge protection devices'
      ]
    },
    {
      heading: 'Domestic Services',
      paragraph: 'We provide full residential solutions — from rewiring to smart home installations — with safety, neatness, and compliance.',
      items: [
        'Part and full re-wires',
        'New sockets & switches',
        'Fuseboard replacement',
        'Fire alarms & smoke detectors',
        'Outside lighting',
        'Garage/shed power supplies',
        'Bathroom and kitchen installations'
      ]
    },
    {
      heading: 'Commercial Services',
      paragraph: 'Our commercial electrical services include office wiring, emergency lighting, and 3-phase power solutions for small and large businesses.',
      items: [
        'Office wiring & fit-outs',
        'Retail unit electrics',
        'Restaurant kitchens',
        'Warehouse lighting',
        'Server room wiring',
        'Emergency call-outs',
        'Planned maintenance contracts',
        '3-phase power installation'
      ]
    },
    {
      heading: 'Inspection, Testing & Certificates',
      paragraph: 'We offer full certification and inspection services for landlords, homeowners, and businesses — ensuring legal compliance and safety.',
      items: [
        'EICR Reports',
        'PAT Testing',
        'Landlord Certificates',
        'Periodic Inspection Reports (PIR)',
        'Fixed wire testing'
      ]
    }
  ];
}
