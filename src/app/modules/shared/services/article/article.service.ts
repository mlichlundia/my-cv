import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ARTICLE_URL} from "../../constants/url";
import {ArticleInterface} from "../../interfaces/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private http!: HttpClient

  constructor(private httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend)
  }

  public getLastArticle(): Observable<ArticleInterface[]> {
    return this.http.get<ArticleInterface[]>(ARTICLE_URL)
        .pipe(map((res: ArticleInterface[]) => res))
  }
}
