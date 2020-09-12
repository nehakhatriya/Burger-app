import React from 'react';
import Layout from './components/Layout/layout';
import BurgerBuilder from './components/Container/BurgerBuilder/BurgerBuilder';
import Checkout from './components/CheckoutSummary/Checkout'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div >
       <Layout>
         <Route path="/checkout" component={Checkout}/>
         <Route path="/" exact component={BurgerBuilder}/>
      
       </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
