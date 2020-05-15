import React, { Component } from 'react'
import { IPixelApiImage, IPixelAPI} from'../types/PixelApi'
Mu


interface State {
     images: IPixelApiImage[],
     textSearch:string,
     numberElement:number



}

export default class imagesApi extends Component<IPixelAPI, State> {
public state:State={
     images:[],
     textSearch:'',
     numberElement:15

}
      async componentDidMount(){
           const images = await this.props.queryImagesFromPixel(this.state.textSearch,12)
     this.setState({images})
     }
     render() {
          return (
               <div>
               {!this.state.images.length?<p> loading ... 😂</p>:}
               </div>
          )
     }
}

