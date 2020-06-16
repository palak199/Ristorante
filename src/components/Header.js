import React,{Component} from 'react';
import {Modal, ModalHeader, ModalBody, Navbar, Nav, NavbarBrand,NavbarToggler,NavItem,Jumbotron, Collapse, Form,FormGroup, Input, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      isNavOpen:false,
      isModalOpen:false
    }
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
  }
  toggleNav(){
    this.setState({isNavOpen:!this.state.isNavOpen});
  } 
  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen});
  }
render(){
    return(
    <React.Fragment>
      <Navbar dark>
        <NavbarToggler  onClick={this.toggleNav}/>
       <NavbarBrand href="/">
         <img src="assets/images/logo.png" alt="i" height="30" width="41"/>
       </NavbarBrand>
       <Nav className="mr-auto" navbar>
         <Collapse isOpen={this.state.isNavOpen} navbar>
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
            <Nav className="ml-auto">
                <NavItem>
                  <button onClick={this.toggleModal}><span><i className="fa fa-sign-in">login</i></span></button>
                </NavItem>
            </Nav>
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
     <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
       <ModalHeader>
         Login
       </ModalHeader>
       <ModalBody>
         <Form onSubmit={this.handleLogin} >
       <FormGroup>
          <Label htmlFor="username">username</Label>
          <Input type="text" id="username" name="username"></Input>
        </FormGroup>
         <FormGroup>
          <Label htmlFor="password">password</Label>
          <Input type="password" id="password" name="password"/>
          <Input type="checkbox" name="remember">remember me </Input>
        </FormGroup>
        <FormGroup>
          <button type="submit" className="bg-primary">login</button>
        </FormGroup>
        </Form>
       </ModalBody>
     </Modal>
        </React.Fragment>
    )
}
}
export default Header;