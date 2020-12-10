import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

// Decorator function
@Component({
  selector: 'courses',
  template: `
        <button class="btn btn-primary" (click)="onSave()" [style.backgroundColor]="isActive ? '#45e43a' : '#e288c3'">Hey</button>
        <div (click)="onDivClick()">
          <button class="btn badge-secondary" (click)="onSave()">OnDivClick</button>
        </div>
        <h2>{{ title }}</h2>
        <ul>
          <li *ngFor="let course of courses">
            {{ course }}
          </li>
        </ul>
        <img src="{{ imageUrl }}" width="150px"/>
        <img [src]="imageUrl" [width]="200"  />
        <input [(ngModel)]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        <h2>Let's do some pipes</h2>
        <ul>
          <li>{{ course.title | uppercase }}</li>
          <li>{{ course.students | number }}</li>
          <li>{{ course.rating | number:'1.1-1' }}</li>
          <li>{{ course.price | currency:'CHF'}}</li>
          <li>{{ course.releaseDate | date:'mediumDate'}}</li> <!-- DatePipe on angular.io for more pipes -->
        </ul>


  `
})
export class CoursesComponent {
  course = {
    title: "Un cours Angular",
    rating: 5,
    students: 50000,
    price: 16,
    releaseDate: new Date(2016, 3, 1)
  }

  isActive = true;
  email = "me@example.com";
  onKeyUp() {
    console.log(this.email);
  }

  onDivClick() {
    console.log("Div was clicked");
  }
  onSave() {
    this.isActive = false;
    console.log("test");
  }

  title = 'List of courses';
  courses;
  imageUrl = "https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

  constructor(service: CoursesService) {
      this.courses = service.getCourses();
  }

}
