// @flow
import React from 'react';

import type {Article} from "../domain/Article";
import {ArticleContainer} from "./ArticleContainer";

type Props = {
  articles: Article[]
}

export const ArticleListComponent = (props: Props) => {
  const {articles} = props;
  return (
    <div>
      {
        articles.map((article: Article, index) => (
          <ArticleContainer
            article={article}
            key={index}
          />
        ))
      }
    </div>
  )
};
