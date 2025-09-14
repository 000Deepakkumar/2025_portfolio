import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-experince',
  imports: [CommonModule],
  templateUrl: './my-experince.html',
  styleUrl: './my-experince.css',
})
export class MyExperince {
  experiences = [
    {
      company: 'KanlasTech, Patna',
      duration: 'December 2024 - Currently',
      role: 'Software Engineer',
      description:
        'Spearheaded the implementation of real-time messaging using Socket.IO for message delivery and receving. Integrated Firebase Cloud Messaging (FCM) for delivering push notifications across web and mobile platforms. Built scalable front-end modules using Next.js and Angular, and deployed services in Docker containers. Led efforts in improving app performance and participated in cross-functional agile teams.',
      color: '#FF7A00',
    },
    {
      company: 'KanlasTech, Patna',
      duration: 'June 2024 - December 2024',
      role: 'Intern Software Engineer',
      description:
        'Assisted in the development of front-end components using Angular and contributed to bug fixes and feature enhancements. Collaborated with senior developers on real-time project modules and gained hands-on experience with Git, REST APIs, and Agile workflows.',
      color: '#0F0F1A',
    },
  ];
}
