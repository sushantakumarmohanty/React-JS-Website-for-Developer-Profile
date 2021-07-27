import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Home from '../Common/Home';
import AboutUs from '../Common/About';
import Careers from '../Common/Careers';
import Work from '../Common/Work'
import Articles from '../Common/Articles'

class BootstrapNavbar extends React.Component {
    render() {
        return (
            <div>
                <div className="row nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.sticky-top">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about-us">About Us</Nav.Link>
                                        <Nav.Link href="/careers">Careers</Nav.Link>
                                        <Nav.Link href="/work">Work</Nav.Link>
                                        <Nav.Link href="/articles">Articles</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/careers">
                                    <Careers />
                                </Route>
                                <Route path="/work">
                                    < Work />
                                </Route>
                                <Route path="/articles">
                                    < Articles />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;