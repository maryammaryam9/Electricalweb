import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { ServicesComponent } from '../app/pages/services/services.component';
import { CategoriesComponent } from '../app/pages/categories/categories.component';
import { OurchargesComponent } from '../app/pages/ourcharges/ourcharges.component';
import { OperatingAreasComponent } from '../app/pages/operating-areas/operating-areas.component';;
import { AboutComponent } from '../app/pages/about/about.component';;
import { ContactusComponent } from '../app/pages/contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default path
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'categories', component: CategoriesComponent },


  { path: 'categories', component: CategoriesComponent },
  { path: 'ourcharges', component: OurchargesComponent },
  { path: 'operating-areas', component: OperatingAreasComponent },

  { path: 'aboutus', component: AboutComponent },
  { path: 'contact', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
