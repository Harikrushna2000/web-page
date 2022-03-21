import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webpage';

  shoping:boolean=false;

  toggle(){
    this.shoping=!this.shoping;
  }
}
