import React, { Component} from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';

//Validators
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
    constructor(props){
        super(props)
            this.state={
                name: '',
                email: '',
                message: '',
                touched:{
                    name: false
                }
            };
    }

    handleSubmit(values){
        alert(JSON.stringify(values))
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col mb-5">
                        <h1 className="bobs-title">Contact Us</h1>
                        <h3>Stop by our butcher shop at 4861 Rainier Avenue South</h3>
                        <h3>call us at 206-725-1221 to place an order</h3>
                        <h3>Don't want to call? Send us an email!</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="container">
                        <LocalForm model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
                                    <Row className="form-group mb-4"> 
                                        <Label htmlFor="name" md={2}>Name</Label>
                                        <Col md={10}>
                                        <Control.text model=".name" id="name" name="name"
                                                placeholder="name"
                                                className="form-control"
                                                validators={{
                                                    required, 
                                                    minLength: minLength(2),
                                                    maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group mb-4">
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Control.text model=".email" id="email" name="email"
                                                placeholder="Email"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    validEmail: 'Invalid email address'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group mb-4">
                                        <Label htmlFor="message" md={2}>Comments</Label>
                                        <Col md={10}>
                                            <Control.textarea
                                                className="form-control"
                                                model=".message"
                                                id="message"
                                                name="message"
                                                rows="6"
                                            />
                                        </Col>
                                    </Row>
                        <Button outline className="mb-4" type="submit" value="submit" color="danger">Submit</Button>
                    </LocalForm>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact