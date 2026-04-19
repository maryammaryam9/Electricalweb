// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";

// import { HomeComponent } from "../app/pages/home/home.component";
// import { ServicesComponent } from "../app/pages/services/services.component";
// import { CategoriesComponent } from "../app/pages/categories/categories.component";
// import { OurchargesComponent } from "../app/pages/ourcharges/ourcharges.component";
// import { OperatingAreasComponent } from "../app/pages/operating-areas/operating-areas.component";
// import { AboutComponent } from "../app/pages/about/about.component";
// import { ContactusComponent } from "../app/pages/contactus/contactus.component";
// import { DetailcardpageComponent } from "./pages/detailcardpage/detailcardpage.component";

// const routes: Routes = [
//   { path: "", redirectTo: "/home", pathMatch: "full" }, // default path
//   { path: "home", component: HomeComponent },
//   { path: "services", component: ServicesComponent },
//   { path: "categories", component: CategoriesComponent },

//   { path: "categories", component: CategoriesComponent },
//   { path: "ourcharges", component: OurchargesComponent },
//   { path: "operating-areas", component: OperatingAreasComponent },

//   { path: "aboutus", component: AboutComponent },
//   { path: "contact", component: ContactusComponent },
//   { path: "detailPage/:id", component: DetailcardpageComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../app/pages/home/home.component";
import { ServicesComponent } from "../app/pages/services/services.component";
import { CategoriesComponent } from "../app/pages/categories/categories.component";
import { OurchargesComponent } from "../app/pages/ourcharges/ourcharges.component";
import { OperatingAreasComponent } from "../app/pages/operating-areas/operating-areas.component";
import { AboutComponent } from "../app/pages/about/about.component";
import { ContactusComponent } from "../app/pages/contactus/contactus.component";
import { DetailcardpageComponent } from "./pages/detailcardpage/detailcardpage.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "ourcharges", component: OurchargesComponent },
  { path: "operating-areas", component: OperatingAreasComponent },
  { path: "aboutus", component: AboutComponent },
  { path: "contact", component: ContactusComponent },
  // Detail page route with ID parameter
  { path: "detailPage/:id", component: DetailcardpageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // 1. Scroll position ko har naye page par top par reset karta hai
      scrollPositionRestoration: "enabled",
      // 2. Fragment (id) par scroll karne ke liye (agar future mein chahiye ho)
      anchorScrolling: "enabled",

      scrollOffset: [0, 100], // [X, Y] -> Y ko 100px rakhein (Header ki height)
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
