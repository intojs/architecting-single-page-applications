// @flow
import React, {Component} from 'react';

import type {Article} from "../domain/Article";
import {ArticleComponent} from "./ArticleComponent";
import * as articleService from '../domain/ArticleService';
import * as articleStore from "../store/ArticleStore";

type Props = {
  article: Article;
};

export class ArticleContainer extends Component<Props> {

  likeArticle(article: Article) {
    const updatedArticle = articleService.updateLikes(article, article.likes + 1);
    articleStore.updateArticle(updatedArticle);
  }

  removeArticle(article: Article) {
    articleStore.removeArticle(article);
  }

  render() {
    return (
      <ArticleComponent
        className="mb-4"
        article={this.props.article}
        likeArticle={(article: Article) => this.likeArticle(article)}
        deleteArticle={(article: Article) => this.removeArticle(article)}
      />
    )
  }
}
