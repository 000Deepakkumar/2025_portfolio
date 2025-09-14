import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-project',
  imports: [CommonModule],
  templateUrl: './my-project.html',
  styleUrl: './my-project.css',
})
export class MyProject {
  cards = [
    {
      image: '/assets/Images/loya.png',
      title: 'Loya',
      description:
        'Loya is a complete e-commerce solution that brings together a wide variety of products including fresh fruits, fashion wear, toys, and daily essentials. Designed with a clean interface and smooth navigation, it offers customers an effortless shopping experience while ensuring reliability and convenience at every step.',
      link: 'https://custapp.kanlas-tech.com/home',
    },
    {
      image: '/assets/Images/razorPay.png',
      title: 'Payment System',
      description:
        'A secure and fully integrated payment system built with Razorpay backend APIs. It enables users to complete transactions with multiple payment methods such as UPI, credit/debit cards, and net banking. The system ensures safe, fast, and reliable processing while maintaining end-to-end encryption and compliance with industry standards.',
      link: '',
    },
    {
      image: '/assets/Images/default.png',
      title: 'Landing Page',
      description:
        'A modern, responsive landing page designed to make a strong first impression. Built with user-centric design principles, it highlights core features, clear CTAs, and attractive visuals. Perfect for showcasing products, services, or campaigns while ensuring compatibility across all devices.',
      link: '',
    },
    {
      image: '/assets/Images/default.png',
      title: 'Admin Panel',
      description:
        'A powerful and intuitive admin panel for managing users, orders, payments, and system configurations. It provides real-time insights, reporting tools, and advanced controls, giving administrators full visibility and command over platform operations with minimal effort.',
      link: '',
    },
  ];

  tags = ['Landing Page', 'Product Design', 'Full Stack', 'API Integration', 'Node.js', 'Cards'];

  pageSize = 2;
  activeDot = 0;

  get dots() {
    return new Array(Math.ceil(this.cards.length / this.pageSize));
  }

  get paginatedCards() {
    const start = this.activeDot * this.pageSize;
    return this.cards.slice(start, start + this.pageSize);
  }

  setActiveDot(index: number) {
    this.activeDot = index;
  }

  goTo(link: string) {
    window.location.href = link;
  }

  activeCard = this.cards[0];

  setActiveCard(card: any) {
    this.activeCard = card;
  }
}
