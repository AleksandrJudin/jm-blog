import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUserData } from './actions/actions';

import storageCollector from './services/storageCollector';

import Header from './components/Header';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import AuthPage from './pages/AuthPage';
import RegPage from './pages/RegPage';
import SuccesPage from './pages/SuccesPage';

import 'antd/dist/antd.css';
import './App.sass';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const storageData = storageCollector();

  useEffect(() => {
    if (storageData) {
      dispatch(setUserData(storageData));
    }
  }, [dispatch, storageData]);

  return (
    <div className='container'>
      <Router>
        <Header />
        <Route path='/articles' component={ArticlesListPage} exact />
        <Route path='/articles/:slug' component={ArticlePage} exact />
        <Route path='/sign-in' component={AuthPage} />
        <Route path='/sign-up' component={RegPage} />
        <Route path='/succes' component={SuccesPage} />
        <Route exact path='/' render={() => <Redirect to='/articles' />} />
      </Router>
    </div>
  );
};

export default App;
