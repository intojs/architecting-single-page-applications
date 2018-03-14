// @flow
import {articleService} from "../domain/ArticleService";
import * as articleUiService from "../services/ArticleUiService";

const article = articleService.createArticle({
  title: '12 rules for life',
  author: 'Jordan Peterson'
});

const authorName = article ?
  articleUiService.displayAuthor(article.author) :
  null;

console.log(authorName);
// It will print JORDAN PETERSON

if (article) {
  console.log(article.author);
  // It will print Jordan Peterson
}
