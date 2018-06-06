// @flow
import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

import type {Article} from "../domain/Article";
import * as articleUiService from "../services/ArticleUiService";

type Props = {
  article: Article;
  likeArticle: Function;
  deleteArticle: Function;
}

export const ArticleComponent = (props: Props) => {
  const {
    article,
    likeArticle,
    deleteArticle
  } = props;

  return (
    <Card>
      <CardBody>
        <CardTitle>{article.title}</CardTitle>
        <CardSubtitle>
          {articleUiService.displayAuthor(article.author)}
        </CardSubtitle>
        <CardText>{article.likes}</CardText>
        <Button
          color="primary"
          onClick={() => likeArticle(article)}
        >
          Like
        </Button>{' '}
        <Button
          color="danger"
          onClick={() => deleteArticle(article)}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};
