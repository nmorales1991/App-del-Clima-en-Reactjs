import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import {Grid,Col,Row} from 'react-flexbox-grid';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';



const ciudades = [
  'Talca,cl',
  'San Carlos,cl',
  'Santiago,cl',
  'Paris',
  'Roma',
  'Barcelona',
  'Bogota'
]

class App extends Component {

render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">App Clima paises</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer ciudades={ciudades}></LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={8}>
				<div className="detalles">
						<ForecastExtendedContainer></ForecastExtendedContainer>
				</div>
            </Paper>
            
          </Col>
        </Row>
        
      </Grid>
    );
  }
}


export default App;
