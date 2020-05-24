import React from 'react';
import Header from'./components/Header';
import Footer from './components/Footer';
import SortTemplate from './components/SortTemplate';
import {AppStore} from './contexts/AppContext';

function App() {

  return (
    <div>
      <AppStore>
        <Header/> 
        <SortTemplate/>
        <Footer/>
      </AppStore>
    </div>
  );
}

export default App;
