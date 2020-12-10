import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

// Decorator function
@Component({
  selector: 'courses',
  template: `
        <button class="btn btn-primary" (click)="onSave($event)" [style.backgroundColor]="isActive ? '#45e43a' : '#e288c3'">Hey</button>
        <div (click)="onDivClick()">
          <button class="btn badge-secondary" (click)="onSave($event)">OnDivClick</button>
        </div>
        <h2>{{ title }}</h2>
        <ul>
          <li *ngFor="let course of courses">
            {{ course }}
          </li>
        </ul>
        <img src="{{ imageUrl }}" width="150px"/>
        <img [src]="imageUrl" [width]="200"  />
        <input (keyup)="onKeyUp($event)"/>
  `
})
export class CoursesComponent {
  isActive = true;

  onKeyUp($event) {
    if ($event.keyCode === 13) console.log("Enter was pressed")
  }

  onDivClick() {
    console.log("Div was clicked");
  }
  onSave($event) {
    this.isActive = false;
    console.log($event);
  }

  title = 'List of courses';
  courses;
  imageUrl = "https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

  constructor(service: CoursesService) {
      this.courses = service.getCourses();
  }

}
