import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleId: any;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }


  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.getArticle(this.articleId);
  }

  getArticle(id: number) {
    this.articlesService.getArticle(id).subscribe({
      next: (response) => {
        this.article = response;
      }
    })
  }

}
