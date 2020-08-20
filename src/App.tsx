import React from 'react';
import Header from './components/Header';
import ArticlesListPage from './pages/ArticlesListPage';
import 'antd/dist/antd.css';
import './App.sass';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <ArticlesListPage />
    </div>
  );
};

export default App;
