// @flow
import * as React from 'react'

import type {Article} from "../domain/Article";
import type {ArticleStore} from "../store/ArticleStore";
import {articleStore} from "../store/ArticleStore";
import {ArticleListComponent} from "./ArticleListComponent";

type State = {
  articles: Article[]
}

type Props = {};

export class ArticleListContainer extends React.Component<Props, State> {
  subscriber: Function;
  articleStore: ArticleStore;

  constructor(props: Props) {
    super(props);
    this.articleStore = articleStore;
    this.state = {
      articles: []
    };
    this.subscriber = this.articleStore.subscribe((articles: Article[]) => {
      this.setState({articles});
    });
  }

  componentWillUnmount() {
    this.articleStore.unsubscribe(this.subscriber);
  }

  render() {
    return <ArticleListComponent {...this.state}/>;
  }
}
