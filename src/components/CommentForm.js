import React,{Component} from 'react';
import {Modal, ModalHeader, Label,Row,Col,Button, ModalBody} from 'reactstrap';
import {LocalForm,Control,Errors} from 'react-redux-form';
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
    alert(JSON.stringify(values))
    console.log(JSON.stringify(values))
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
                                    <Control.select model=".rating" id="rating" placeholder="1" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
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
export default CommentForm;