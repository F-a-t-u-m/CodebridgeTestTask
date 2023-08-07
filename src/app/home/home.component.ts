import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue = '';
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  resultCount: number = this.articles.length;

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getArticles().subscribe({
      next: (response) => {
        this.articles = response.results;
        this.applyFilter();
      }
    })
  }

  applyFilter() {
    if (!this.searchValue || this.searchValue.trim() === '') {
      this.filteredArticles = this.articles;
      this.resultCount = this.articles.length;
      return;
    }

    const searchWords = this.searchValue.toLowerCase().split(/\s+/);
    const matches: Article[] = [];

    this.articles.forEach((article) => {
      let isPriorityMatch = false;
      let isOtherMatch = false;

      searchWords.forEach((searchWord) => {
        if (article.title.toLowerCase().includes(searchWord)) {
          isPriorityMatch = true;
        } else if (article.summary.toLowerCase().includes(searchWord)) {
          isOtherMatch = true;
        }
      });

      if (isPriorityMatch) {
        matches.push(article);
      } else if (isOtherMatch) {
        matches.push(article);
      }
    });

    this.filteredArticles = matches;
    this.resultCount = matches.length;
  }

}
