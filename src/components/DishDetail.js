import React,{Component} from 'react';
import {Card, CardImg, CardBody, Breadcrumb, BreadcrumbItem, CardText, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
// import CommentForm from './CommentForm';
import {Modal, ModalHeader, Label,Row,Col,Button, ModalBody} from 'reactstrap';
import {LocalForm,Control,Errors} from 'react-redux-form';
import { Loading } from './loading';

function RenderComments({comments,addComment,dishId}){
    
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
            
            <CommentForm 
            addComment={addComment} 
            dishId={dishId}/>
        </ul>)
    }
    else
    return (<div></div>)

}

function RenderDish({dish}){

    return( 
        <Card>
       <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
         <CardTitle>{dish.name}</CardTitle>
         <CardText>{dish.description}</CardText>                
       </CardBody>
    </Card>)
    
}

const DishDetail=(props)=>{
       
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null)
  
       { return(
       
      <div className="row">
           <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <RenderComments 
                comments={props.comments}
                addComment={props.addComment}
                dishId={props.dishId}
                />
               
            </div>
        </div>
        
        )
        
}
else return(<div></div>)
}

// const required=(val)=>!(val)&&val.length;
// const maxLength=(len)=>(val)=>!(val)|| (val.length<=len)
// const minLength=(len)=>(val)=>!(val)&& (val.length>=len)
class CommentForm extends Component{
constructor(props){
    super(props);
    this.state={
        isOpen:false
    }
    this.toggleModal=this.toggleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
}
toggleModal(){
    this.setState({
        isOpen:!this.state.isOpen
    })
}

onSubmit(values){
    this.toggleModal();
    this.props.addComment(this.props.dishId,values.rating,values.author,values.comment)

}

render(){
  

    return(
        <React.Fragment>
<div>
<Button onClick={this.toggleModal} className="fa fa-pencil btn-lg m-1"> submit comment</Button>
</div>
<Modal isOpen={this.state.isOpen}>
    <ModalHeader>submit Comment</ModalHeader>
<ModalBody>
         <LocalForm onSubmit={(values)=>this.onSubmit(values)} >
         <Row className="form-group">
            <Label>Rating</Label>
                <Col md={10}>
                    <Control.select model=".rating" name="rating" id="rating" placeholder="1" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Control.select>
                </Col>
                    </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={2}>Your Name</Label>
                            <Col md={10}>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Name"
                                    className="form-control"
                                    // validators={{required }}
                                        />
                                        {/* <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{ 
                                            required:"is required",
                                            
                                        }}
                                        /> */}
                            </Col>
                        </Row>          
                    <Row className="form-group">
                        <Label htmlFor="comment" md={2}>Comment</Label>
                        <Col md={10}>
                                    <Control.textarea rows="6" model=".comment" id="comment" name="comment"
                                        className="form-control" />
                                </Col>
                            </Row>
                            
                            <Button type="submit" color="primary">
                                    Send comment
                                    </Button>
             </LocalForm>
             </ModalBody>
</Modal>
</React.Fragment>
)
}
}

export default DishDetail;