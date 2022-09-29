import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArticleService} from "../../modules/shared/services/article/article.service";
import {ArticleInterface} from "../../modules/shared/interfaces/article.interface";
import {ARTICLE_MOCKS} from "../../modules/shared/mocks/article.mock";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public article: ArticleInterface = ARTICLE_MOCKS[0]

  constructor(private cdr: ChangeDetectorRef, private articleService: ArticleService) {}

  ngOnInit() {
    this.getPosts()
  }

  public getPosts():void {
    this.articleService.getLastArticle()
      .subscribe((res) => {
        this.article = res[0] ? res[0] : ARTICLE_MOCKS[0]
        this.cdr.markForCheck()
      })
  }
}
