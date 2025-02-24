import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';  // Do ikon
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { GalleriaModule } from 'primeng/galleria';
import { GoogleMapsModule } from '@angular/google-maps';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FamillyComponent } from './portfolio/familly/familly.component';
import { EngagementComponent } from './portfolio/engagement/engagement.component';
import { BusinessComponent } from './portfolio/business/business.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http'; // Importuj HttpClientModule

import { GooglePlacesService } from './../services/google-places.service'; // Importowanie serwisu
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { MatIconModule } from '@angular/material/icon';
import { FaqComponent } from './faq/faq.component';
import { InstagramGalleryComponent } from './instagram-gallery/instagram-gallery.component'; // Dodaj import

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FamillyComponent,
    EngagementComponent,
    BusinessComponent,
    FaqComponent,
    InstagramGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    GalleriaModule,
    GoogleMapsModule,
    ButtonModule,
    TextareaModule,
    InputTextModule,
    FormsModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    RatingModule,
    CarouselModule,
    HttpClientModule,
    ProgressSpinnerModule,
    DialogModule,
    PanelModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none'
      }
      },
    }),
    GooglePlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
