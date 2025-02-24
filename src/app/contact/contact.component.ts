import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { GooglePlacesService } from '../../services/google-places.service';
import { HttpClient } from '@angular/common/http';

export interface OpeningHours {
  open_now: boolean;
  periods: Array<{ open: { day: number; time: string } }>;
  weekday_text: string[];
}



@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  openingHours: OpeningHours | null = null;
  location: { lat: number; lng: number } | null = null; // Typowanie z możliwością null
  
  zoom = 15;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
  };

  contact = {
    name: 'Joanna Łuczak',
    email: '22@22.pl',
    phone: '111 111 111'
  };
  contactFormula = {
    name: '',
    email: '',
    message: ''
  };
constructor(private googlePlacesService: GooglePlacesService, private http: HttpClient) {}

  ngOnInit() {
    const placeId = 'ChIJT3vEE_Shrw0RF-x_eeZH-eE';
    this.googlePlacesService.getHours(placeId).subscribe((result: any) => {
      this.openingHours = result
    })
    this.googlePlacesService.getLocalization(placeId).subscribe((result: any) => {
      this.location = {lat: result.lat, lng: result.lng}
      console.log(this.location)
    })
  }

  getStatus(): string {
    return this.openingHours && this.openingHours.open_now ? 'Otwarte' : 'Zamknięte';
  }

  sendEmail() {
    const url = 'http://localhost:4200/send-email.php'; // podmień na adres skryptu PHP
    this.http.post(url, this.contactFormula).subscribe(
      (response) => {
        console.log('Wiadomość została wysłana', response);
        // Opcjonalnie: pokaż komunikat sukcesu użytkownikowi
      },
      (error) => {
        console.error('Błąd wysyłania wiadomości', error);
        // Opcjonalnie: pokaż komunikat błędu użytkownikowi
      }
    );
  }
}
