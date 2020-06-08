import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
    super(props);
  
    
}

render(){
  
    const renderComments=this.props.dish.comments.map((commentList)=>{
        if(commentList!=null){
    return(
        <li key={commentList.id}>
            {commentList.comment}<br/>
            --{commentList.author}, {commentList.date}

        </li>
    )}}
    );
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>                
            </CardBody>
        </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="li">
                {renderComments}
                </ul>
        </div>
        </div>
        )
 
}
}
export default DishDetail;