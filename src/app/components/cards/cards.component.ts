import { Component, Input } from '@angular/core';
import { COURSES } from 'src/app/card-data';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input()
  course!: Course;

  constructor() {}

  onCourseViewed() {
    console.log("card button clicked")
  }

}
