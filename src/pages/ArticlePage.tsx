import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Avatar, Spin } from 'antd';

import { ISlug } from '../types/interfaces';
import { getSinglePostRequest } from '../actions/actions';
import ChangePostButtons from '../components/ChangePostButtons';
import FavoriteCountBtn from '../components/FavoriteCountBtn';

const ArticlePage: React.FC = ({ match }: any) => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state: any) => state.isAuthentication);
  const { Title, Paragraph } = Typography;
  const token = isAuth && user.token;
  const { post, isFetching } = useSelector((state: any) => state);
  const currentPost = !isFetching ? post : null;
  console.log(currentPost);
  const {
    title,
    body,
    createdAt,
    favoritesCount,
    favorited,
    tagList,
    description,
    author,
  } = currentPost;

  useEffect(() => {
    dispatch(getSinglePostRequest(match.params.slug, token));
  }, [dispatch, match.params.slug, token]);

  const localStorageData: any = localStorage.getItem('login');

  const authUser: any =
    localStorageData && JSON.parse(localStorageData).user.username;
  const authToken: any =
    localStorageData && JSON.parse(localStorageData).user.token;

  const createTagList = tagList && (
    <ul className='tab__list'>
      {tagList.map((el: string) => (
        <li key={`tags_${el}`} className='tab__list_item'>
          {el}
        </li>
      ))}
    </ul>
  );
  console.log(authUser);
  const content: any = !isFetching && (
    <>
      {authUser && authUser === author.username && (
        <ChangePostButtons slug={match.params.slug} token={authToken} />
      )}

      <div className='d-flex justify-content-between mt-4'>
        <div className='d-flex'>
          <Title className='pr-3' level={4}>
            {title}
          </Title>
          <FavoriteCountBtn
            count={favoritesCount}
            slug={match.params.slug}
            favorited={favorited}
          />
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

  return isFetching ? (
    <Spin size='large' />
  ) : (
    <h1>lOLOLOLOLOLOLOLOLOLOLOLOL</h1>
  );
};

export default ArticlePage;
