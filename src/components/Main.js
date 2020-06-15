import React, { Component } from 'react';
import '../App.css';
import DishDetail from '../components/DishDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, withRouter, Route, Redirect} from 'react-router-dom';
import Contact from '../components/Contact';
import About from '../components/About';
import Menu from '../components/Menu';
import Home from '../components/Home';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const dishWithId=({match})=>{
      return(
        <DishDetail 
        dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))} />
      )
  
    }
  return (
    <div>

       <Router>
       <Header/>
       <Switch>
       <Route path="/home" component={()=><Home 
       dish={this.props.dishes.filter((dish)=>dish.featured===true)[0]} 
       leader={this.props.leaders.filter((leader)=>leader.featured===true)[0]} 
       promotion={this.props.promotions.filter((promotion)=>promotion.featured===true)[0]} />}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/about" component={()=><About leaders={this.props.leaders}/>}/>
       <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
       <Route path='/menu/:dishId' component={dishWithId} />
       <Redirect to="/home" />
              </Switch>
              <Footer/>
       </Router>
      
      </div>
  );
}
}
export default withRouter(connect(mapStateToProps)(Main));
