import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrivateRoute from '../helpers/PrivateRoute';
import DefaultRoute from '../helpers/DefaultRoute';

import { setUserData } from '../actions/actions';
import { Result } from 'antd';

import storageCollector from '../services/storageCollector';

import Header from '../components/Header';
import ArticlesListPage from '../pages/ArticlesListPage';
import ArticlePage from '../pages/ArticlePage';
import AuthPage from '../pages/AuthPage';
import RegPage from '../pages/RegPage';
import SuccesPage from '../pages/SuccesPage';
import ProfilePage from '../pages/ProfilePage';
import NewArticlePage from '../pages/NewArticlePage';
import EditArticlePage from '../pages/EditArticlePage';

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

  const NotFoundPage: JSX.Element = (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
    />
  );

  return (
    <div className='container'>
      <Router>
        <Header />
        <Switch>
          <DefaultRoute path='/' component={ArticlesListPage} exact />
          <Route path='/articles' component={ArticlesListPage} exact />
          <Route path='/articles/:slug' component={ArticlePage} exact />
          <Route path='/sign-in' component={AuthPage} />
          <Route path='/sign-up' component={RegPage} />
          <Route path='/succes' component={SuccesPage} />
          <PrivateRoute path='/profile' component={ProfilePage} exact />
          <PrivateRoute path='/new-article' component={NewArticlePage} />
          <PrivateRoute
            path='/articles/:slug/edit'
            component={EditArticlePage}
            exact
          />
          <Route render={() => NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
