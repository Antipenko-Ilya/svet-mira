import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Heder';
import { Content } from './Content/Content';
import { General } from './Content/General';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={ General }/>
        <Route path="/goods/" exact component={ Content }/>
        <Route path="/goods/:category" exact component={ Content }/>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
