import React, { Component } from 'react';
import { Nav, NavItem, NavLink, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';

class Navigation extends Component {
    constructor(props){
        super(props)

        // binding functions
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen : false
        }
    }

    //Functions
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
    return (
        <React.Fragment>
            <Navbar dark sticky="top" expand="md" className="md-text" style={styles.container}>
                <NavbarBrand className="mr-auto md-text bobs-title">Bob's Quality Meats</NavbarBrand>
                <NavbarToggler onClick={this.toggleNav}/>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink className="nav-link" href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/menu">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="https://www.facebook.com/bobsqualitymeats"><i className="fa fa-facebook"/></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
        );
    }
}

const woodbg = '/images/wood.jpg'

const styles = {
    container: {
        backgroundImage: `url(${woodbg})`,
        backgroundSize: "cover"
    }
};


export default Navigation;