import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: Article = new Article();
  submitted = false;

  constructor(private articleService: ArticleService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  save() {
    this.articleService.createArticle(this.article)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    // this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/add']);
  }

}
