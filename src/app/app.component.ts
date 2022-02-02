import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '自社社員名簿';

  constructor(private mainTitle: Title){
    this.mainTitle.setTitle("社員名簿システム");
  }
}
