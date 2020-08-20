import React from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
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
  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <button className='post__like_btn'>
        <HeartOutlined />
        <span className='comment-action no-active'>1</span>
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
          <h3>{title}</h3>
          <p>{body}</p>
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

export default ArticlesPost;
