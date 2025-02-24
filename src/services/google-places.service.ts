import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {
  private apiKey: string = 'AIzaSyCA5Cj0GMAKksgfNAWUMMFBWIlClPlspNs'; // Możesz pozostawić klucz API, ale proxy już zajmie się komunikacją
  constructor(private http: HttpClient) { }

  getReviews(placeId: string): Observable<any> {
    // Zmieniamy URL na wersję korzystającą z proxy '/api'
    const url = `/api/maps/api/place/details/json?placeid=${placeId}&key=${this.apiKey}&language=pl`;
    return this.http.get<any>(url).pipe(
      map(response => response.result.reviews) 
    )
  }
  getHours(placeId: string): Observable<any> {
    // Zmieniamy URL na wersję korzystającą z proxy '/api'
    const url = `/api/maps/api/place/details/json?placeid=${placeId}&key=${this.apiKey}&language=pl`;
    return this.http.get<any>(url).pipe(
      map(response => response.result.opening_hours) // Wyciąganie tylko godziny otwarcia
    );; // Wykonanie zapytania HTTP do backendu przez proxy
  }

  getLocalization(placeId: string): Observable<any> {
    // Zmieniamy URL na wersję korzystającą z proxy '/api'
    const url = `/api/maps/api/place/details/json?placeid=${placeId}&key=${this.apiKey}&language=pl`;
    return this.http.get<any>(url).pipe(
      map(response => response.result.geometry.location) // Wyciąganie tylko godziny otwarcia
    );; // Wykonanie zapytania HTTP do backendu przez proxy
  }
}
