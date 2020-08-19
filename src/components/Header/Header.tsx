import React from 'react';
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
        <Button key='3'>Sign In</Button>,
        <Button key='2'>Sign Up</Button>,
      ]}
    ></HeaderContent>
  );
};

export default Header;
