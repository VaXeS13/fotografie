import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places.service';

interface Image {
  itemImageSrc: string;
  alt: string;
  title: string;
}

interface OpinionsGoogle{
  author_name: string
author_url: string
profile_photo_url: string
rating: number
text: string
time: number
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  public fullStarsArray: number[] = [];
  public emptyStarsArray: number[] = [];
  public fractionalPart: number = 0;
public stars: string[] = [];
public rating: number = 0
public loading: boolean = true
public reviews: OpinionsGoogle[] = [];


public fullStars: number = 0;
public hasHalfStar: boolean = false;
public images: Image[] = []

ngOnInit() {

this.images = [ {
  itemImageSrc: 'https://pastelovefoto.pl/wp-content/uploads/2024/07/DSC_05071.png',
  alt: 'Description for Image 1',
  title: 'SESJE KOBIECE'
},
{
  itemImageSrc: 'https://pastelovefoto.pl/wp-content/uploads/2024/07/DSC_05071.png',
  alt: 'Description for Image 2',
  title: 'SESJE '
},
{
  itemImageSrc: 'https://pastelovefoto.pl/wp-content/uploads/2024/07/DSC_05071.png',
  alt: 'Description for Image 3',
  title: 'SESJE '
},
{
  itemImageSrc: 'https://pastelovefoto.pl/wp-content/uploads/2024/07/DSC_05071.png',
  alt: 'Description for Image 4',
  title: 'SESJE '
},
{
  itemImageSrc: 'https://pastelovefoto.pl/wp-content/uploads/2024/07/DSC_05071.png',
  alt: 'Description for Image 5',
  title: 'SESJE '
},
{
  itemImageSrc: 'https://pastelovefoto.pl/wp-content/uploads/2024/07/DSC_05071.png',
  alt: 'Description for Image 6',
  title: 'SESJE '
},
{
  itemImageSrc: 'https://pastelovefoto.pl/wp-content/uploads/2024/07/DSC_05071.png',
  alt: 'Description for Image 7',
  title: 'SESJE '
}]
}

constructor(private googlePlacesService: GooglePlacesService) {
  this.calculateStars();
  this.reviews = []
  const placeId = 'ChIJT3vEE_Shrw0RF-x_eeZH-eE';  // Podaj ID miejsca, którego opinie chcesz pobrać
  this.googlePlacesService.getReviews(placeId).subscribe((reviews) => {
    console.log("Fetching reviews...")
    this.reviews = reviews
    this.reviews.push(reviews[0])
    this.reviews.push(reviews[0])
    this.reviews.push(reviews[0])
    this.reviews.push(reviews[0])
    this.reviews.push(reviews[0])
    this.loading = false
    this.rating = this.getSumOfOpinions()
    this.calculateStars();
  })
}

calculateStars() {
  const fullStars = Math.floor(this.rating);
  this.fractionalPart = this.rating % 1;
  const emptyStars = 5 - Math.ceil(this.rating);

  this.fullStarsArray = Array(fullStars).fill(0);
  this.emptyStarsArray = Array(emptyStars).fill(0);
}

getSumOfOpinions(){

  return this.reviews.reduce((sum, review) => sum + review.rating, 0) / this.reviews.length
}

convertUnixTimeToDate(unixTime: number): string {
  const date = new Date(unixTime * 1000); // Unix timestamp jest w sekundach, więc musimy pomnożyć przez 1000, aby uzyskać milisekundy
  return date.toLocaleString(); // Możesz użyć toLocaleString, aby wyświetlić datę i godzinę w formacie lokalnym
}



}
