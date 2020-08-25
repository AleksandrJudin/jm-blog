import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { PageHeader, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './Header.sass';
import { logOut } from '../../actions/actions';

const Header: React.FC = () => {
  const { isAuth, user } = useSelector((state: any) => state.isAuthentication);
  const dispatch = useDispatch();

  const userAvatars: any =
    isAuth && (user.image ? user.image : <UserOutlined />);

  const handlerLogOut = () => {
    localStorage.removeItem('login');
    dispatch(logOut());
  };

  const createInfoProfile: JSX.Element = (
    <div className='d-flex align-center' key='info-profile'>
      <div className='profile-group'>
        <span className='d-block'>{isAuth && user.email}</span>
        <button onClick={handlerLogOut}>Выйти</button>
      </div>
      <Avatar size={40} icon={userAvatars} />
    </div>
  );

  const notAuthContent: JSX.Element = (
    <React.Fragment key='auth-btn'>
      <Button>
        <Link to='/sign-in'>Sign In</Link>
      </Button>
      <Button>
        <Link to='/sign-up'>Sign Up</Link>
      </Button>
    </React.Fragment>
  );

  return (
    <PageHeader
      key={Math.random()}
      className='site-page-header'
      title='My Super Blog'
      onBack={() => window.history.back()}
      subTitle='This is a subtitle'
      extra={[isAuth ? createInfoProfile : notAuthContent]}
    ></PageHeader>
  );
};

export default Header;
