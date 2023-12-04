import { Component } from '@angular/core';
import { COURSES } from '../../card-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allowNewServer = false;
  serverCreationStatus = "No Server was Created";
  data = {
    title: 'FunkyRobot.ca'
  };

  onCreateServer() {
    alert("Hey Carlos")
  }

  onLogoClick() {
    alert("Hello Human")
  }
  onKeyUp(newTitle:string) {
this.data.title = newTitle;
  }

  coreCourses = COURSES[0];
  rxjsCourses = COURSES[1];
  ngrxCourses = COURSES[2];
  swap2go = COURSES[3];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },3000)
  }
}
