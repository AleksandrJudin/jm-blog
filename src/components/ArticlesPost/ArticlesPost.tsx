import React from 'react';
import { withRouter } from 'react-router-dom';

import { Comment, Tooltip, Avatar } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import './ArticlesPost.sass';

const ArticlesPost: React.FC<any> = ({
  title,
  author,
  createdAt,
  description,
  favoritesCount,
  slug,
  tagList,
  history,
}) => {
  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <button className='post__like_btn' disabled>
        <HeartOutlined />
        <span className='comment-action no-active'>{favoritesCount}</span>
      </button>
    </Tooltip>,
  ];
  return (
    <Comment
      actions={actions}
      author={<span>{author.username}</span>}
      avatar={<Avatar src={author.image} alt='Han Solo' />}
      content={
        <div>
          <ul className='tab__list'>
            {tagList.map((el: string) => (
              <li key={`tags_${el}`} className='tab__list_item'>
                {el}
              </li>
            ))}
          </ul>
          <h2
            className='post__title'
            onClick={() => history.push(`/articles/${slug}`)}
          >
            {title}
          </h2>
          <p>{description}</p>
        </div>
      }
      datetime={
        <Tooltip title={createdAt}>
          <span>{createdAt.substring(0, 10)}</span>
        </Tooltip>
      }
    />
  );
};

export default withRouter(ArticlesPost);
