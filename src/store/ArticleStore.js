// @flow
import {update} from "ramda";

import type {Article} from "../domain/Article";
import type {ArticleState} from "../domain/ArticleState";

let articleState: ArticleState = Object.freeze([]);
let subscribers: Function[] = Object.freeze([]);

export const notify = (articleState: ArticleState, subscribers: Function[]) =>
  subscribers.forEach((s: Function) => s(articleState));

export const addArticle = (article: Article) => {
  articleState = articleState.concat(article);
  notify(articleState, subscribers);
};

export const removeArticle = (article: Article) => {
  articleState = articleState.filter((a: Article) => a.id !== article.id);
  notify(articleState, subscribers);
};

export const updateArticle = (article: Article) => {
  const index = articleState.findIndex((a: Article) => a.id === article.id);
  articleState = update(index, article, articleState);
  notify(articleState, subscribers);
};

export const subscribe = (subscriber: Function) => {
  subscribers = subscribers.concat(subscriber);
  return subscriber;
};

export const unsubscribe = (subscriber: Function) => {
  subscribers = subscribers.filter((s: Function) => s !== subscriber);
};
