import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  public imgSrc: string = '/assets/img/default-article.png'
  public title: string = 'Article title'
}
