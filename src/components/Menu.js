import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardImgOverlay} from 'reactstrap';
import DishDetail from './DishDetail';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null,
        }
    
    }
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        })

    }

    renderDish(dish){
        if(dish!=null){       
            return(<DishDetail dish={dish} />)
        }
    }

 
    
    render(){
        const menu=this.props.dishes.map((dish)=>{        
        return(
                
                <div className="col-md-5 col-12 m-1" key={dish.id}>
                    <Card>
                        <CardImg top width="100%" src={dish.image} />                            
                           <CardImgOverlay onClick={()=>this.onDishSelect(dish)} className="ml-5">
                                <CardTitle >
                                    {dish.name}
                                </CardTitle>
                            </CardImgOverlay>
                          </Card>
                </div>
              
        );
    });
    
    return(

    <div className="container">
        <div className="row">           
                {menu}
        </div>
        <div>
            {this.renderDish(this.state.selectedDish)}
        </div>
    </div>
    );

}
}
export default Menu;