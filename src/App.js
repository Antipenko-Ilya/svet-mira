import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Heder';
import { Content } from './Content/Content';
import { General } from './Content/General';
import { Footer } from './Content/Footer';
import { Pupup } from './Content/Pupup';
import { Cart } from './Cart/Cart';
import { store } from "./store";

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ General }/>
          <Route path="/goods/" exact component={ Content }/>
          <Route path="/goods/:brand/" exact component={ Content }/>
          <Route path="/goods/:brand/:type" exact component={ Content }/>
          <Route path="/good/" exact component={ Pupup }/>
          <Route path="/cart/" exact component={ Cart }/>
          <Route path="/cart/" exact component={ General.Footer}/>
          <Route path="/cart/" exact component={ General }/>
          <Route path="/cart/" exact component={ General }/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
