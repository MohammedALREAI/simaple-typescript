import React from 'react';
import './App.css';
import Header from './Component/Header';
import imagesApi from './Component/imagesApi';
import PixelServices from './index';


function App() {
  return (
    <div className="App">
            <Header/>
            <imagesApi queryImagesFromPixel={PixelServices.queryImagesFromPixel}/>
    </div>
  );
}

export default App;
