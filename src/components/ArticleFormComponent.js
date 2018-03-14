// @flow
import React from 'react';

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
    <form
      noValidate
      onSubmit={onSubmit(submitForm)}
    >
      <div>
        <label htmlFor="article-title">Title</label>
        <input
          type="text"
          id="article-title"
          name="articleTitle"
          autoComplete="off"
          value={formData.articleTitle.value}
          onChange={changeArticleTitle}
        />
        {!formData.articleTitle.valid && (<p>Please fill in the title</p>)}
      </div>
      <div>
        <label htmlFor="article-author">Author</label>
        <input
          type="text"
          id="article-author"
          name="articleAuthor"
          autoComplete="off"
          value={formData.articleAuthor.value}
          onChange={changeArticleAuthor}
        />
        {!formData.articleAuthor.valid && (<p>Please fill in the author</p>)}
      </div>
      <button
        type="submit"
        value="Submit"
      >
        Create article
      </button>
    </form>
  )
};
