import React, { useEffect, useState } from 'react';
import ArticlesPost from '../components/ArticlesPost';
import { useSelector, useDispatch } from 'react-redux';
import { getPostRequest } from '../actions/actions';

const ArticlesListPage: React.FC = () => {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostRequest(page));
  }, [dispatch, page]);

  const posts = useSelector((state: any) => state.getPosts);
  const createPostsList = posts.map((elem: any) => {
    return (
      <ArticlesPost
        key={elem.slug}
        title={elem.title}
        author={elem.author}
        body={elem.body}
        createdAt={elem.createdAt}
        description={elem.description}
        favorited={elem.favorites}
        favoritesCount={elem.favoritesCount}
        slug={elem.slug}
        tagList={elem.tagList}
      />
    );
  });
  return createPostsList;
};

export default ArticlesListPage;
