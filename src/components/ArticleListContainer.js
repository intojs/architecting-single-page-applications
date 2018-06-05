// @flow
import * as React from 'react'

import type {Article} from "../domain/Article";
import {ArticleListComponent} from "./ArticleListComponent";
import * as articleStore from "../store/ArticleStore";

type State = {
  articles: Article[]
}

type Props = {};

export class ArticleListContainer extends React.Component<Props, State> {
  subscriber: Function;

  constructor(props: Props) {
    super(props);
    this.state = {
      articles: []
    };
    this.subscriber = articleStore.subscribe((articles: Article[]) => {
      this.setState({articles});
    });
  }

  componentWillUnmount() {
    articleStore.unsubscribe(this.subscriber);
  }

  render() {
    return <ArticleListComponent {...this.state}/>;
  }
}
