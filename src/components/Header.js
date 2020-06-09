import React,{Component} from 'react';
import {Navbar, Nav, NavbarBrand,NavbarToggler,NavItem,Jumbotron, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import about from '../components/About';
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      isOpen:true
    }
    this.toggleNav=this.toggleNav.bind(this);
  }
  toggleNav(){
    this.setState({isOpen:!this.state.isOpen});
  }
render(){
    return(
    <React.Fragment>
      <Navbar dark>
        <NavbarToggler  onClick={this.toggleNav}/>
       <NavbarBrand href="/">
         <img src="assets/images/logo.png" height="30" width="41"/>
       </NavbarBrand>
       <Nav className="mr-auto" navbar>
         <Collapse isOpen={this.state.isOpen} navbar>
       <NavItem>
              <NavLink className="nav-link" to="/home">
              <span className="fa fa-home fa-lg">Home</span>
              </NavLink>
            </NavItem>
        <NavItem>
              <NavLink className="nav-link" to="/about">              
              <span className="fa fa-info fa-lg">about us</span>
            </NavLink>
        </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact" >
                <span className="fa fa-address-card fa-lg">contact us</span>
              </NavLink>
        </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu" >
                <span className="fa fa-list fa-lg">menu</span>
              </NavLink>
            </NavItem>
            </Collapse>
           </Nav>
       </Navbar>
     <Jumbotron>
        <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
            </div>
        </div>
     </Jumbotron>
        </React.Fragment>
    )
}
}
export default Header;