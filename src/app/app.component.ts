import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: 'FunkyRobot.ca'
  };

  onLogoClick() {
    alert("Hello Human")
  }
  onKeyUp(newTitle:string) {
this.data.title = newTitle;
  }
}
