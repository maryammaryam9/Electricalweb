import { Component } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  services = [
    {
      imageSrc: "../../../assets/domestic.jpeg",
      title: "Domestic Electrician",
      description:
        "The SCV Electrical domestic electrician team provide a wide range of electrical services ranging from lighting installations and rewiring to smart home integrations.",
    },
    {
      imageSrc: "../../../assets/eicrmvcimg.png",
      title: "EICR, MWC, EIC",
      description:
        "SCV Electrical provides a comprehensive and efficient electrical certification service ensuring compliance, safety, and reliability for our clients.",
    },
    {
      imageSrc: "../../../assets/comericalimg.png",
      title: "Commercial Electrician",
      description:
        "Our comprehensive commercial electrical offering is designed to address the complex electrical needs of modern businesses, empowering our clients with reliability, safety, and energy efficiency.",
    },

   {
  imageSrc: "../../../assets/evcharger.png",
  title: "EV Charger Installation",
  description: "As the UK EV market grows, drivers have more home charging options than ever, which can make choosing your first charger feel overwhelming.",
  sections: [
    { heading: "Why Install an EV Charger at Home?" },
    { 
      heading: "Estimate the Cost of Charging Your EV at Home", 
      subtext: "Cost Estimator Tool" 
    },
    {
      heading: "Key Considerations for Choosing a Home EV Charger",
      points: [
        "Where is the best place to install an EV charger?",
        "Does My EV Charger Need Wi-Fi?",
        "Understanding The Costs of Installing a Home EV Charger",
        "Choosing The Right EV Charger for Your Home",
        "Choosing The Best Home EV Charge Point Provider",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I install an EV charger at home?",
      a: "Generally, if you have off-street parking, you can install an EV charger at home. Getting an EV charger installed in rented accommodation is still possible, but this will of course mean getting permission from your landlord or the freeholders of your building.",
      isOpen: false
    },
    {
      q: "Do I need permission to install an EV charger?",
      a: "Generally, you don&#39;t need planning permission for a home charger if you own the property. However, if you live in a listed building or a conservation area, or you don’t have your own off-street parking, you may need permission to install a charger from your council. Be sure to research general EV charger planning permission requirements and contact your local authority when in doubt.",
      isOpen: false
    },
    {
      q: "Can a normal electrician install an EV charger?",
      a: "(Only electricians certified under EV charger schemes like OZEV can legally and safely install a home EV charging point.",
      isOpen: false
    },
    {
      q: "What is required to install an electric car charger at home?",
      a: "To install an electric car charger at home, you'll generally need off-street parking, a safe home electrical system, and possibly an isolation switch installed by your energy provider.",
      isOpen: false
    },
    {
      q: "Do I need to rewire my house for an EV charger?",
      a: "You usually won't need to rewire your home to accommodate an EV charger, but older wiring may need upgrading to meet the required safety standards. If you want to upgrade to three-phase power to accommodate a charger with rapid or super rapid output, this is more likely to require rewiring. Talk to your EV charge point installer or a qualified electrician for more advice.",
      isOpen: false
    },

 {
      q: "Do I need planning permission for a home EV charger?",
      a: "Not usually—unless your property is listed or in a protected area.",
      isOpen: false
    },



    {
      q: "What if I live in a conservation area?",
      a: "You may need permission. Always check with your local council.",
      isOpen: false
    },
    {
      q: "Can businesses install chargers without planning permission?",
      a: "Yes, up to five chargers under Permitted Development, subject to size limits.",
      isOpen: false
    }
  ]
}
  ];
}
