import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './pages/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { OurchargesComponent } from './pages/ourcharges/ourcharges.component';
import { OperatingAreasComponent } from './pages/operating-areas/operating-areas.component';
import { DetailcardpageComponent } from './pages/detailcardpage/detailcardpage.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HerosectionComponent } from './pages/herosection/herosection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactusComponent,
    OurchargesComponent,
    OperatingAreasComponent,
    DetailcardpageComponent,
    CategoriesComponent,
    HerosectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
