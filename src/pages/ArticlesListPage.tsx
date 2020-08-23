import React, { useEffect, useState } from 'react';
import { Pagination, Spin } from 'antd';
import ArticlesPost from '../components/ArticlesPost';
import { useSelector, useDispatch } from 'react-redux';
import { getPostRequest } from '../actions/actions';
// import ArticlePage from './ArticlePage';

const ArticlesListPage: React.FC = () => {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostRequest(page));
  }, [dispatch, page]);

  const changePaginations = (count: number): number => {
    if (count !== 1) {
      return +(count + '0');
    }
    return count;
  };

  const handlePaginationPage = (page: number): void => {
    setPage(changePaginations(page));
  };

  const state = useSelector((state: any) => state);
  const { isFetchingAllPosts, getPosts } = state;

  const createPostsList = getPosts.map((elem: any) => {
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
  const content = (
    <>
      {createPostsList}
      <Pagination
        showSizeChanger={false}
        defaultCurrent={1}
        total={500}
        onChange={(page) => handlePaginationPage(page)}
      />
    </>
  );

  return isFetchingAllPosts ? <Spin size='large' /> : content;
};

export default ArticlesListPage;
