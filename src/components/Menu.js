import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, CardImgOverlay} from 'reactstrap';
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
            return(
                <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

            )
        }
    }
    render(){
        const menu=this.props.dishes.map((dish)=>{        
        return(
                
                    <div className="col-12 col-md-5 m-1" key={dish.id}>
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
        <div className="row mt-1">
        <div className=" col-12 col-md-5">
        {this.renderDish(this.state.selectedDish)}
        </div>
    </div>
    </div>
    );

}
}
export default Menu;