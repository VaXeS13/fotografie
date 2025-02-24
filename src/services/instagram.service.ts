import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  // Używamy zmiennych środowiskowych, aby łatwo zmienić konfigurację
  private readonly USER_ID = environment.instagramUserId;
  private readonly ACCESS_TOKEN = environment.instagramAccessToken;
  // Endpoint API – pobieramy pola: id, caption, media_url, permalink oraz media_type
  private readonly API_URL = `https://graph.instagram.com/${this.USER_ID}/media?fields=id,caption,media_url,permalink,media_type&access_token=${this.ACCESS_TOKEN}`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<InstagramPost[]> {
    return this.http.get<any>(this.API_URL)
      .pipe(
        map(response => response.data as InstagramPost[])
      );
  }
}
