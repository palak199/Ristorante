import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import {Dishes} from './shared/dishes'
import Menu from './components/Menu';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      dishes:Dishes
    }
  }
  render(){
  return (
    <div className="App">
     <Navbar dark color="primary">
       <div className="dark">
       <NavbarBrand href="/">
         homie
       </NavbarBrand>
       </div>
     </Navbar>
     <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}
export default App;
