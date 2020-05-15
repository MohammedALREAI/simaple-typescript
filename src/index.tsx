import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IPixelAPI, IPixelApiImage} from './types/PixelApi'
 export default class PixelServices implements IPixelAPI {
     private static readonly  pixelApi=`https://pixabay.com/api/?key=123`
      public async queryImagesFromPixel(searchText: string, numberTagsImage: number):Promise<IPixelApiImage[]> {
           if (!searchText){
                throw new Error(`there is no text input😢😢 `);
                return []

           }
           const textSearch=`${PixelServices.pixelApi}image_type=phote&pre_page=${numberTagsImage}&q${encodeURIComponent(searchText)}`
try {
     let res = await fetch(textSearch);
     const resJson=await res.json();
     return resJson.hits




} catch (error) {
     throw new Error(error)

}

}


}
let pixel = new PixelServices()


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
import { format } from 'path';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
