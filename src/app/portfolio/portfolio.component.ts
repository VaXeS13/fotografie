
import { Component, Input, OnInit} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Image {
  itemImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  animations: [
    trigger('overlayAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class PortfolioComponent{
 @Input() images: Image[] = []
 displayOverlay = false;
 currentIndex = 0;
 displayModal: boolean = false;
 selectedImage: any;

 openModal(item: any) {
  this.selectedImage = item;
  this.displayModal = true;
}

openOverlay(index: number): void {
  this.currentIndex = index;
  this.displayOverlay = true;
}

closeOverlay(event?: MouseEvent): void {
  if (event) {
    event.stopPropagation();
  }
  this.displayOverlay = false;
}

nextImage(event: MouseEvent): void {
  event.stopPropagation();
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

prevImage(event: MouseEvent): void {
  event.stopPropagation();
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
}
}
