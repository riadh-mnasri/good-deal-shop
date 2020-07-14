import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesStore = new Array();

  createArticle(article: Article): Observable<Article> {
    this.articlesStore.push(article);
    return of(article);
  }

}
