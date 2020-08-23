import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';

import 'antd/dist/antd.css';
import './App.sass';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <Router>
        <Route path='/articles' component={ArticlesListPage} exact />
        <Route path='/articles/:slug' component={ArticlePage} exact />
        <Route
          exact
          path='/'
          render={() => {
            return <Redirect to='/articles' />;
          }}
        />
      </Router>
    </div>
  );
};

export default App;
