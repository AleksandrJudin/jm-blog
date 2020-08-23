import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Tooltip, Avatar, Spin } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { ISlug } from '../types/interfaces';
import { getSinglePostRequest } from '../actions/actions';

const ArticlePage: React.FC<ISlug> = ({ match }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePostRequest(match.params.slug));
  }, [dispatch, match.params.slug]);

  const state = useSelector((state: any) => state);

  const { Title, Paragraph } = Typography;
  const { getSinglePost, isFetchingSinglePost } = state;
  const {
    title,
    body,
    createdAt,
    favoritesCount,
    tagList,
    description,
    author,
  } = getSinglePost;

  const createTagList = tagList && (
    <ul className='tab__list'>
      {tagList.map((el: string) => (
        <li key={`tags_${el}`} className='tab__list_item'>
          {el}
        </li>
      ))}
    </ul>
  );

  const content: any = !isFetchingSinglePost && (
    <>
      <div className='d-flex justify-content-between mt-4'>
        <div className='d-flex'>
          <Title className='pr-3' level={4}>
            {title}
          </Title>
          <Tooltip key='comment-basic-like-sdasf' title='Like'>
            <button className='post__like_btn' disabled>
              <HeartOutlined />
              <span className='comment-action'>{favoritesCount}</span>
            </button>
          </Tooltip>
        </div>

        <div className='author d-flex'>
          <div className='pr-3'>
            <span className='d-block text-center'>{author.username}</span>
            <span className='text-center'>{createdAt.substring(0, 10)}</span>
          </div>

          <Avatar src={author.image} alt='Han Solo' />
        </div>
      </div>
      {createTagList}
      <p>{description}</p>

      <Paragraph>{body}</Paragraph>
    </>
  );

  return isFetchingSinglePost ? <Spin size='large' /> : content;
};

export default ArticlePage;
