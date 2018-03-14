// @flow
import type {ArticleState} from "../store/ArticleState";
import {articleService} from "../domain/ArticleService";
import {articleStore} from "../store/ArticleStore";

const article1 = articleService.createArticle({
  title: '12 rules for life',
  author: 'Jordan Peterson'
});

const article2 = articleService.createArticle({
  title: 'The Subtle Art of Not Giving a F.',
  author: 'Mark Manson'
});

if (article1 && article2) {
  const subscriber1 = (articleState: ArticleState) => {
    console.log('subscriber1, articleState changed: ', articleState);
  };

  const subscriber2 = (articleState: ArticleState) => {
    console.log('subscriber2, articleState changed: ', articleState);
  };

  articleStore.subscribe(subscriber1);
  articleStore.subscribe(subscriber2);

  articleStore.addArticle(article1);
  articleStore.addArticle(article2);

  articleStore.unsubscribe(subscriber2);

  const likedArticle2 = articleService.updateLikes(article2, 1);
  articleStore.updateArticle(likedArticle2);

  articleStore.removeArticle(article1);
}
