import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import servicesApi from '../services/servicesAPI';

import { Result } from 'antd';

const NewArticlePage: React.FC = (): any => {
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState<string>('');

  const { register, handleSubmit, errors } = useForm();
  const { isAuth, user } = useSelector((state: any) => state.isAuthentication);
  let history = useHistory();

  const onSubmit = (data: any) => {
    const api = new servicesApi();
    const { title, description, text } = data;
    const result = {
      article: {
        title,
        description,
        body: text,
        tagList: tags,
      },
    };
    api
      .addNewPostRequest(result, user.token)
      .then((data) => history.push('/articles'))
      .catch((e) => console.log(e));
  };

  let uniqId = 100;
  const createTags = () => {
    return tags.map((el, i) => {
      return (
        <li key={`${++uniqId}_${el}`}>
          <span>{el}</span>
          <button data-id={i} onClick={removeTag}>
            Delete
          </button>
        </li>
      );
    });
  };

  const onChangeTagValue = (e: any): void => {
    setValue(e.target.value);
  };

  const onSubmitNewTask = (e: any): void => {
    e.preventDefault();
    if (value && value.length < 20) {
      setTags((tag) => [value, ...tag]);
      setValue('');
    }
  };

  const removeTag = (e: any): void => {
    e.preventDefault();
    const itemId = e.target.getAttribute('data-id');
    const newArr = tags.filter((element, id) => id !== +itemId);
    setTags(newArr);
  };

  const content = isAuth ? (
    <div className='create-article'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Create New Article</legend>
          <label htmlFor='title' className='create-article__label'>
            Title:
          </label>
          <input
            type='text'
            className='create-article__input'
            name='title'
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.title && (
            <span className='no-valid'>
              Title must have at least from 4 to 100 characters
            </span>
          )}
          <label htmlFor='title' className='create-article__label'>
            Short Description:
          </label>
          <input
            type='text'
            className='create-article__input'
            name='description'
            ref={register({
              required: true,
              minLength: 10,
              maxLength: 250,
            })}
          />
          {errors.description && (
            <span className='no-valid'>
              Description must have at least from 10 to 250 characters
            </span>
          )}

          <label htmlFor='title' className='create-article__label'>
            Text:
          </label>
          <textarea
            className='create-article__input'
            name='text'
            ref={register({
              required: true,
              minLength: 50,
              maxLength: 4000,
            })}
          />
          {errors.text && (
            <span className='no-valid'>
              Text must have at least from 50 characters
            </span>
          )}
          <div className='create-article__tags'>
            <div className='tags d-flex'>
              <fieldset>
                <legend>Add tags</legend>
                <input
                  type='text'
                  name='tags'
                  onChange={onChangeTagValue}
                  value={value}
                  ref={register({
                    minLength: 2,
                    maxLength: 20,
                  })}
                />
                {errors.tags && (
                  <span className='no-valid'>
                    Tag must have at least from 2 to 20 characters
                  </span>
                )}
                <button className='add-tag' onClick={onSubmitNewTask}>
                  Add tag
                </button>
              </fieldset>
            </div>
            {tags.length !== 0 && <ul className='tag-list'>{createTags()}</ul>}
          </div>
          <button type='submit'>Create post</button>
        </fieldset>
      </form>
    </div>
  ) : (
    <Result
      status='403'
      title='403'
      subTitle='Sorry, you are not authorized to access this page.'
    />
  );
  return content;
};

export default NewArticlePage;
