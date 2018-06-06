// @flow
import React from 'react';
import {Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

import type {FormData} from './ArticleFormContainer';

type Props = {
  formData: FormData;
  changeArticleTitle: Function;
  changeArticleAuthor: Function;
  submitForm: Function;
}

export const ArticleFormComponent = (props: Props) => {
  const {
    formData,
    changeArticleTitle,
    changeArticleAuthor,
    submitForm
  } = props;

  const onSubmit = (submitHandler) => (event) => {
    event.preventDefault();
    submitHandler(event);
  };

  return (
    <Form
      noValidate
      onSubmit={onSubmit(submitForm)}
    >
      <FormGroup>
        <Label htmlFor="article-title">Title</Label>
        <Input
          type="text"
          id="article-title"
          name="articleTitle"
          autoComplete="off"
          value={formData.articleTitle.value}
          invalid={!formData.articleTitle.valid}
          onChange={changeArticleTitle}
        />
        {!formData.articleTitle.valid && (
          <FormFeedback>Please fill in the title</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="article-author">Author</Label>
        <Input
          type="text"
          id="article-author"
          name="articleAuthor"
          autoComplete="off"
          value={formData.articleAuthor.value}
          invalid={!formData.articleAuthor.valid}
          onChange={changeArticleAuthor}
        />
        {!formData.articleAuthor.valid && (
          <FormFeedback>Please fill in the author</FormFeedback>
        )}
      </FormGroup>
      <button
        className="btn btn-primary"
        type="submit"
        value="Submit"
      >
        Create article
      </button>
    </Form>
  )
};
