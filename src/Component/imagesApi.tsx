import React, { Component } from 'react'
import { IPixelApiImage, IPixelAPI} from'../types/PixelApi'
// import { WA} from'@material-ui/core'
import wrapperImages from './wrapperImages';


type State ={
     images: IPixelApiImage[],
     textSearch:string,
     numberElement:number,
     errorMessaGE:string
}

export default class imagesApi extends Component<IPixelAPI, State> {
public state:State={
     images:[],
     textSearch:'',
     numberElement:15,
     errorMessaGE:""

}
      async componentDidMount(){
           try {

                const images = await this.props.queryImagesFromPixel(this.state.textSearch,12)
          this.setState({images,errorMessaGE:''})

           } catch (error) {
                this.setState({errorMessaGE:error,images:[]})


           }}
     render() {
          return (
               <div>
               {!this.state.images.length?<p> loading ... 😂</p>:(
                    this.state.images.map(item=>(<wrapperImages {...item}/>)))}
                         {this.state.errorMessaGE &&
                         (<p> {this.state.errorMessaGE}</p>)
                         }
                         </div>
