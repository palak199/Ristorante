import React, { Component } from 'react';
import '../App.css';
import {Dishes} from '../shared/dishes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Contact from '../components/Contact';
import About from '../components/About';
import Menu from '../components/Menu';
import Home from '../components/Home';
import {Leaders} from '../shared/leaders';
import {Comments} from '../shared/comments';
import {Promotions} from '../shared/promotions';
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:Dishes,
      leaders:Leaders,
      promotions:Promotions,
      comments:Comments,

    }
  }

  render(){
  return (
    <div>

       <Router>
       <Header/>
       <Switch>
       <Route path="/home" component={()=><Home 
       dish={this.state.dishes.filter((dish)=>dish.featured===true)[0]} 
       leader={this.state.leaders.filter((leader)=>leader.featured===true)[0]} 
       promotion={this.state.promotions.filter((promotion)=>promotion.featured===true)[0]} />}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/about" component={()=><About/>}/>
       <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
       <Redirect to="/home" />
              </Switch>
       </Router>
      <Footer/>
      </div>
  );
}
}
export default Main;
