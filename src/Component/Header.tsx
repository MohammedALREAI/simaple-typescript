import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from '../logo.svg';
// import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem'

interface Props {

}

const Header:React.SFC = (props: Props) => {
     return (
          <AppBar position="sticky" color="primary">
           <Toolbar>
                <img src={logo} alt="image logo" width="56px"/>
                    <Typography variant="h6" color="inherit" noWrap>
                         pixabayfinder
           </Typography>

               </Toolbar>
               <Toolbar>
                    <a href="http://">
                    <img src="" alt="image logo" width="100%" />

                    </a>

               </Toolbar>

               </AppBar>

     )
}

export default Header



