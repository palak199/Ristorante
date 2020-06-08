import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
     <Navbar dark color="primary">
       <div className="dark">
       <NavbarBrand href="/">
         homie
       </NavbarBrand>
       </div>
     </Navbar>
     <Menu/>
    </div>
  );
}

export default App;
