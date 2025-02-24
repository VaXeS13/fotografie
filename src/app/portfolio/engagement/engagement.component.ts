import { Component } from '@angular/core';
interface Image {
  itemImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-engagement',
  standalone: false,
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.css'
})
export class EngagementComponent {
  public images: Image[] = []

  ngOnInit() {
  
  this.images = [ {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
    alt: 'Description for Image 3',
    title: 'Title 3'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
    alt: 'Description for Image 4',
    title: 'Title 4'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
    alt: 'Description for Image 5',
    title: 'Title 5'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
    alt: 'Description for Image 6',
    title: 'Title 6'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
    alt: 'Description for Image 7',
    title: 'Title 7'
  }]
  }
  
}
