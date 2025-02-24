import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './portfolio/business/business.component';
import { FaqComponent } from './faq/faq.component';
import { EngagementComponent } from './portfolio/engagement/engagement.component';
import { FamillyComponent } from './portfolio/familly/familly.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/narzeczenskie', component: EngagementComponent },
  { path: 'portfolio/biznesowe', component: BusinessComponent },
  { path: 'portfolio/rodzinne', component: FamillyComponent },
  { path: 'oferta', component: ServicesComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'o-mnie', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
