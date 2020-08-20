import React, { useState, createElement } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
// import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import moment from 'moment';
import './ArticlesPost.sass';
import { IPosts } from '../../types/interfaces';
const ArticlesPost: React.FC<IPosts> = ({
  title,
  author,
  body,
  createdAt,
  description,
  favorited,
  favoritesCount,
  slug,
  tagList,
}) => {
  console.log(author);
  return (
    <Comment
      // actions={actions}
      author={<span>{author.username}</span>}
      avatar={<Avatar src={author.image} alt='Han Solo' />}
      content={
        <div>
          <ul>
            {tagList.map((el: string) => (
              <li key={`tags_${el}`}>{el}</li>
            ))}
          </ul>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default ArticlesPost;
