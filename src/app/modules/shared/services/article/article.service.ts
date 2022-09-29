import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ARTICLE_URL} from "../../constants/url";
import {ArticleInterface} from "../../interfaces/article.interface";
import {ARTICLE_TOKEN} from "../../constants/token";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}

  public getLastArticle(): Observable<ArticleInterface[]> {
    return this.http.get<ArticleInterface[]>(ARTICLE_URL, {params: { accessToken: ARTICLE_TOKEN }})
      .pipe(map((res: ArticleInterface[]) => res))
  }
}
