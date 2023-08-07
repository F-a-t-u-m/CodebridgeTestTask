import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
