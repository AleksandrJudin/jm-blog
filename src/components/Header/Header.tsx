import React from 'react';

import { Link } from 'react-router-dom';
import { PageHeader, Button } from 'antd';
import './Header.sass';

const HeaderContent: any = PageHeader;

const Header: React.FC = () => {
  return (
    <HeaderContent
      className='site-page-header'
      title='My Super Blog'
      onBack={() => window.history.back()}
      subTitle='This is a subtitle'
      extra={[
        <Button key='3'>
          <Link to='/sign-in'>Sign In</Link>
        </Button>,
        <Button key='2'>
          <Link to='/sign-up'>Sign Up</Link>
        </Button>,
      ]}
    ></HeaderContent>
  );
};

export default Header;
