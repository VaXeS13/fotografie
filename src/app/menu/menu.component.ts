import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  
  items: MenuItem[] | undefined

  ngOnInit() {
    this.items = [
      {
        label: 'O mnie',
        icon: PrimeIcons.HOME,
        routerLink: '/o-mnie',
      },
      {
        label: 'Oferta',
        icon: PrimeIcons.HOME,
        routerLink: '/oferta',
      },
      {
        label: 'Portfolio',
        icon: PrimeIcons.BRIEFCASE,
        items: [
          {
            label: 'Sesja narzeczeńska / dla par',
            icon: PrimeIcons.CAMERA,
            routerLink: '/portfolio/narzeczenskie',
          },
          {
            label: 'Sesja rodzinna',
            icon: PrimeIcons.CAMERA,
            routerLink: '/portfolio/rodzinne',
          },
          {
            label: 'Sesja biznesowa',
            icon: PrimeIcons.CAMERA,
            routerLink: '/portfolio/biznesowe',
          }
        ]
      },
      {
        label: 'FAQ',
        icon: PrimeIcons.ENVELOPE,
        routerLink: '/faq'
      },
      {
        label: 'Kontakt',
        icon: PrimeIcons.ENVELOPE,
        routerLink: '/kontakt'
      }
    ];
  }
}
