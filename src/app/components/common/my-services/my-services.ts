import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-services',
  imports: [CommonModule],
  templateUrl: './my-services.html',
  styleUrl: './my-services.css',
})
export class MyServices {
  cardsArray = [
    {
      name: 'Angular',
      image: 'assets/Images/angular.png',
      link: 'https://angular.dev',
    },
    {
      name: 'NestJS',
      image: 'assets/Images/nestJs.png',
      link: 'https://nestjs.com',
    },
    {
      name: 'GitHub',
      image: 'assets/Images/github.jpg',
      link: 'https://github.com',
    },
    {
      name: 'TypeScript',
      image: 'assets/Images/typescript.png',
      link: 'https://www.typescriptlang.org',
    },
    {
      name: 'RxJS',
      image: 'assets/Images/rxjs.jpg',
      link: 'https://rxjs.dev',
    },
    {
      name: 'Node.js',
      image: 'assets/Images/nodeJs.webp',
      link: 'https://nodejs.org',
    },
    {
      name: 'Express',
      image: 'assets/Images/express.webp',
      link: 'https://expressjs.com',
    },
    {
      name: 'MongoDB',
      image: 'assets/Images/mongoDb.png',
      link: 'https://www.mongodb.com',
    },
    {
      name: 'Docker',
      image: 'assets/Images/docker.jpg',
      link: 'https://www.docker.com',
    },
    {
      name: 'Socket.IO',
      image: 'assets/Images/socketio.jpg',
      link: 'https://socket.io',
    },
  ];

  @ViewChild('container') containerRef!: ElementRef;

  cardWidth = 416;
  gap = 32;
  itemsPerPage = 1;
  currentPage = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateItemsPerPage();
    }, 0);
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateItemsPerPage();
  }

  calculateItemsPerPage() {
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    this.itemsPerPage = Math.floor((containerWidth + this.gap) / (this.cardWidth + this.gap)) || 1;

    if (this.currentPage >= this.totalPages) {
      this.currentPage = this.totalPages - 1;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.cardsArray.length / this.itemsPerPage);
  }

  get pagedItems() {
    const start = this.currentPage * this.itemsPerPage;
    return this.cardsArray.slice(start, start + this.itemsPerPage);
  }

  goToPage(index: number) {
    this.currentPage = index;
  }
}
