import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography, Button} from "@material-ui/core";
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className='nav'>
          <Typography variant='h4'>
            <Link to='/' className='logo-name'><FilterHdrIcon fontSize='large' />cAarApts</Link>
          </Typography>
          <Link to='/new-hotel'>
            <Button color="inherit">New Hotel</Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}
