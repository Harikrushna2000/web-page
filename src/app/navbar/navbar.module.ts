import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarRoutingModule } from './navbar-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContectComponent } from './contect/contect.component';
import { ServicesComponent } from './services/services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
// import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PricingComponent,
    ContectComponent,
    ServicesComponent,
    FooterComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    BrowserModule,
    NgbModule,
    ToastrModule.forRoot()
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ]
})
export class NavbarModule { }
