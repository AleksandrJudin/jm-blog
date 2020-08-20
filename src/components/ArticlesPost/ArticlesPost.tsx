import React, { useState, createElement } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';
import moment from 'moment';
import './ArticlesPost.sass';
const ArticlesPost: React.FC = () => {
  const [likes, setLikes] = useState<number>(2);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(1);
    setAction('liked');
  };



  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <button onClick={like} disabled={true}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </button>
    </Tooltip>,
  
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <Comment
      actions={actions}
      author={<span>Han Solo</span>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <div>
          <h3>Title Post</h3>
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
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
