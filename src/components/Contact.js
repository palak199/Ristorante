import React,{Component} from 'react';
import {Button,FormGroup,Label, Form, Input,Col} from 'reactstrap'
class Contact extends Component {
    
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            telNum:'',
            email:'',
            agree:false,
            contactType:'Tel',
            message:'',
            touched:{
            firstName:false,
            lastName:false,
            telNum:false,
            email:false,

            }

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{ ...this.state.touched, [field]:true}
}); 
}
    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;
this.setState({
    [name]:value
})
    }

    handleSubmit(event){
        alert("submitted");
        event.preventDefault();

    }

    render(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5> 
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-9">
                    Send Us your Feedback
                </div>
                <div className="col-12 col-md-8">
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="first name" md={2}>first name </Label>
                        <Col md={10}>
                        <Input type="text" name="firstName" id="firstname" placeholder="first name" 
                        value={this.state.firstName}
                        onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>    
                    <FormGroup row>
                    <Label htmlFor="last name" md={2}>last name </Label>
                        <Col md={10}>
                        <Input type="text" name="lastName" id="lastname" placeholder="last name" 
                        value={this.state.lastName}
                        onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>    
                    <FormGroup row>
                    <Label htmlFor="tel number" md={2}>telephone number</Label>
                        <Col md={10}>
                        <Input type="tel" name="telNum" id="telnum" placeholder="tel num" value={this.state.telNum}
                        onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>    
                    <FormGroup row>
                    <Label htmlFor="email" md={2}>email</Label>
                        <Col md={10}>
                        <Input type="email" name="email" id="email" placeholder="email" value={this.state.email}
                        onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>   
                          <FormGroup row>
                          <Col md={{ size:6, offset:2 }}>
                              <FormGroup check>
                                  <Label check>
                                      <Input type="checkbox" name="agree" checked={this.state.agree}
                                      onChange={this.handleInputChange}/>{' '}
                                      <strong>May i contact you</strong>
                                  </Label>
                              </FormGroup>
                              </Col>  
                          <Col md={{ size:3, offset:1 }}>
                              <Input type="select" name="contactType" value={this.state.contactType}
                              onChange={this.handleInputChange}>
                                <option>tel.</option>
                                <option>email</option>
                                </Input>
                              </Col>
                          </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md={2}>your feedback</Label>
                        <Col md={10}>
                        <Input type="textarea" name="message" id="message" placeholder="your feedback" rows="12" value={this.state.message}
                        onChange={this.handleInputChange}/>
                        </Col>
                        <Col md={{ size:10,offset:2 }}>
                            <Button type="submit" color="primary">
                                send feedback
                            </Button>
                        </Col>
                    </FormGroup>  
                    </Form>
                </div>

            </div>
        </div>
    );
}
}
export default Contact;