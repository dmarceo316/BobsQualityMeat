import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6 bg-color">
                        <h1 className="mt-100 bobs-title">Bob's Quality Meats</h1>
                        <h2 className="bobs-title-2"> The Best Meat Market in Seattle</h2>
                        <Button outline color="danger" className="mt-3 mr-4" size="lg" href="tel: 206-725-1221"><i className="fa fa-phone fa-lg"/></Button>
                        <Button outline color="danger" className="mt-3 mr-4" size="lg" href="/menu"><i className="fa fa-book fa-lg"/></Button>
                        <Button outline color="danger" className="mt-3 mr-4" size="lg" href="https://www.facebook.com/bobsqualitymeats"><i className="fa fa-facebook fa-lg" /></Button>
                    </div>
                    <div className="col-sm">
                        <img src={bgImage} alt="Bob's Meats" className="bobs"/>
                    </div>
                </div>
            </div>
        );
    }
}



const bgImage= '/images/bobs-meat-3.jpg'

export default Home 