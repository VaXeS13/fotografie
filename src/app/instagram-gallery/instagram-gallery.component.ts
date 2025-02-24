import { Component, OnInit } from '@angular/core';
import { InstagramService, InstagramPost } from './../../services/instagram.service';

@Component({
  selector: 'app-instagram-gallery',
  standalone:false,
  templateUrl: './instagram-gallery.component.html',
  styleUrls: ['./instagram-gallery.component.css']
})
export class InstagramGalleryComponent implements OnInit {
  posts: InstagramPost[] = [];

  constructor(private instagramService: InstagramService) {}

  ngOnInit(): void {
    this.instagramService.getPosts().subscribe(
      posts => {
        // Filtrujemy tylko te posty, które zawierają obrazy (można rozszerzyć o dodatkowe warunki)
        this.posts = posts.filter(post => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM');
      },
      error => {
        console.error('Błąd pobierania postów z Instagrama:', error);
      }
    );
  }

  openPost(url: string): void {
    window.open(url, '_blank');
  }
}
