import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { AllArticles } from '../models/all-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseUrl = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(
    private http: HttpClient
  ) { }

  getArticles() {
    return this.http.get<AllArticles<Article[]>>(this.baseUrl);
  }

  getArticle(id: number) {
    return this.http.get<Article>(this.baseUrl + '/' + id);
  }
}
