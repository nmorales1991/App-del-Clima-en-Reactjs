import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import {Grid,Col,Row} from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended';
import { createStore } from 'redux';
const ciudades = [
  'Talca,cl',
  'San Carlos,cl',
  'Santiago,cl',
  'Paris',
  'Roma',
  'Barcelona',
  'Bogota'
]
const store = createStore(()=>{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const setCity = value => ({ type:'setCity',value});
class App extends Component {

constructor(){
    super();
    this.state = {ciudad:null};
}
handleSelectionLocation = ciudad=>{
    this.setState({ciudad})
   
    store.dispatch(setCity(ciudad));
}

render() {
    const {ciudad} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">Aplicación del Clima</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList ciudades={ciudades} onSelectedLocation={this.handleSelectionLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={8}>
				<div className="detalles">
				{
				
					ciudad && //if else
						<ForecastExtended ciudad={ciudad}></ForecastExtended>
		
				}		
	
				</div>
            </Paper>
            
          </Col>
        </Row>
        
      </Grid>
    );
  }
}

export default App;
