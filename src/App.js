import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Heder';
import { Content } from './Components/Content/Content';
import { General } from './Components/General/General';
import { Footer } from './Components/Footer/Footer';
import { Pupup } from './Components/Modal/Pupup';
import { Cart } from './Components/Cart/Cart';
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
