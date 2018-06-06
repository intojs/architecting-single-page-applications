// @flow
import React, {Component} from 'react';
import * as R from 'ramda';

import {ArticleFormComponent} from "./ArticleFormComponent";
import * as articleService from "../domain/ArticleService";
import * as articleStore from "../store/ArticleStore";

type Props = {};

type FormField = {
  value: string;
  valid: boolean;
}

export type FormData = {
  articleTitle: FormField;
  articleAuthor: FormField;
};

export class ArticleFormContainer extends Component<Props, FormData> {

  constructor(props: Props) {
    super(props);

    this.state = {
      articleTitle: {
        value: '',
        valid: true
      },
      articleAuthor: {
        value: '',
        valid: true
      }
    };
  }

  changeArticleTitle(event: Event) {
    this.setState(
      R.assocPath(
        ['articleTitle', 'value'],
        R.path(['target', 'value'], event)
      )
    );
  }

  changeArticleAuthor(event: Event) {
    this.setState(
      R.assocPath(
        ['articleAuthor', 'value'],
        R.path(['target', 'value'], event)
      )
    );
  }

  submitForm(event: Event) {
    const articleTitle = R.path(['target', 'articleTitle', 'value'], event);
    const articleAuthor = R.path(['target', 'articleAuthor', 'value'], event);

    const isTitleValid = articleService.isTitleValid(articleTitle);
    const isAuthorValid = articleService.isAuthorValid(articleAuthor);

    if (isTitleValid && isAuthorValid) {
      const newArticle = articleService.createArticle({
        title: articleTitle,
        author: articleAuthor
      });
      if (newArticle) {
        articleStore.addArticle(newArticle);
      }
      this.clearForm();
    } else {
      this.markInvalid(isTitleValid, isAuthorValid);
    }
  };

  clearForm() {
    this.setState((state) => {
      return R.pipe(
        R.assocPath(['articleTitle', 'valid'], true),
        R.assocPath(['articleTitle', 'value'], ''),
        R.assocPath(['articleAuthor', 'valid'], true),
        R.assocPath(['articleAuthor', 'value'], '')
      )(state);
    });
  }

  markInvalid(isTitleValid: boolean, isAuthorValid: boolean) {
    this.setState((state) => {
      return R.pipe(
        R.assocPath(['articleTitle', 'valid'], isTitleValid),
        R.assocPath(['articleAuthor', 'valid'], isAuthorValid)
      )(state);
    });
  }

  render() {
    return (
      <ArticleFormComponent
        className="mt-4 mb-4"
        formData={this.state}
        submitForm={this.submitForm.bind(this)}
        changeArticleTitle={(event) => this.changeArticleTitle(event)}
        changeArticleAuthor={(event) => this.changeArticleAuthor(event)}
      />
    )
  }
}
