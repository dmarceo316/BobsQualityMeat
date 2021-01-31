import Home from './Home';
import Menu from './Menu';
import Contact from './Contact'
import Navigation from './Navigation';
import Footer from './Footer'
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){

        const Homepage = () => {
            return(
                <Home />
            )
        }

        const Menupage = ()=> {
            return(
                <Menu />
            )
        }
        
        const Contactpage = ()=> {
            return(
                <Contact />
            )
        }

        return(
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/home" component={Homepage} />
                <Route path= "/menu" component={Menupage}/>
                <Route path= "/contact" component={Contactpage}/>
                <Redirect to='/home'/>
            </Switch>
            <Footer/>
        </div>
        )
    }
}

export default Main