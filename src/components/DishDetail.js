import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
    super(props);
  
    
}


renderComments(comments){

    if(comments!=null){
        
     const cmts=comments.map((commentList)=>{
                return(<li key={commentList.id}>
                    {commentList.comment}<br/>
                    --{commentList.author}, {commentList.date}
        
                </li>
                )}

        )
        return(<ul>
            {cmts}
        </ul>)
    }
    else
    return (<div></div>)

}

renderDish(dish){
   return( <Card>
       <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
         <CardTitle>{dish.name}</CardTitle>
         <CardText>{dish.description}</CardText>                
       </CardBody>
    </Card>)
}

render(){
  

    if(this.props.dish!=null)
    {
        return(
       
      <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(this.props.dish.comments)}
            </div>
        </div>
        
        )
}
else return(
<div></div>)
}
}
export default DishDetail;