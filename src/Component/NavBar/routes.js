import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Common/Home';
import About from '../Common/About';
import Events from '../Common/Event';
import AnnualReport from '../Common/Articles';
import Blogs from '../Common/Blog';
import SignUp from '../Common/SignUp';
  
function Navbar() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}
  
export default Navbar;