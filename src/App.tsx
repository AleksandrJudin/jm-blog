import React from 'react';
import Header from './components/Header';
import ArticlesListPage from './pages/ArticlesListPage';
import './App.sass'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <ArticlesListPage />
    </div>
  );
};

export default App;
