import React, { Component } from 'react';
import '../App.css';
import {Dishes} from '../shared/Dishes';
import DishDetail from '../components/DishDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Contact from '../components/Contact';
import About from '../components/About';
import Menu from '../components/Menu';
import Home from '../components/Home';
import {Leaders} from '../shared/Leaders';
import {Comments} from '../shared/Comments';
import {Promotions} from '../shared/Promotions';
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
    const dishWithId=({match})=>{
      return(
        <DishDetail 
        dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))} />
      )
  
    }
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
       <Route path="/about" component={()=><About leaders={this.state.leaders}/>}/>
       <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
       <Route path='/menu/:dishId' component={dishWithId} />
       <Redirect to="/home" />
              </Switch>
              <Footer/>
       </Router>
      
      </div>
  );
}
}
export default Main;
