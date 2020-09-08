import React from 'react';
import Layout from './components/Layout/layout';
import BurgerBuilder from './components/Container/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div >
       <Layout>
         <BurgerBuilder/>
         
       </Layout>
    </div>
  );
}

export default App;
