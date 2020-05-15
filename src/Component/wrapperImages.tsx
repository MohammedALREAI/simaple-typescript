import React from 'react'

interface Props {
     id: number,
     tags: string,
     largeImageUrl: string,
     user: string
}

const wrapperImages: React.SFC<Props> = props => {

     return (
          <div key={props.id}>
               <span>{props.tags}</span>
               <span>{props.user}</span>
               <img src={props.largeImageUrl} width="100%" alt={props.largeImageUrl.split('/')[props.largeImageUrl.split('/').length - 1]}/>


          </div>
     )
}

export default wrapperImages

