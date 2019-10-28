import React from 'react';
import logo from './logo.svg';

import CarouselSection from './components/CarouselSection/CarouselSection'
import MenuSection from './components/MenuSection/MenuSection'
import './App.css';

function App() {
  return (
    <div className="App">
        <MenuSection/>

        <CarouselSection/>

    </div>
  );
}

export default App;
