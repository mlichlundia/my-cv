import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArticleService } from "../../../services/article/article.service";
import { ArticleInterface } from "../../../interfaces/article.interface";
import { ARTICLE_MOCKS } from "../../../mocks/article.mock";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public article: ArticleInterface = ARTICLE_MOCKS[0]
  public articleImage: string = ''
  public isLoaded: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getPosts()
  }

  public getPosts(): void {
    this.articleService.getLastArticle()
      .subscribe((res) => {
        this.article = res[0] ? res[0] : ARTICLE_MOCKS[0]
        this.articleImage = this.article.cover_image
        this.cdr.markForCheck()
      })
  }

  public onLoad() {
    this.isLoaded = true
  }
}
