
import React, { Component } from 'react';
import Parent from './Component/Parent';
// import CallBackRefs from './Component/CallBackRefs';
// import ForwardRefs from './Component/ForwardRefs/ForwardRefs'
import Formics from './Component/Formic/Formics'
import NavBarComponent from './Component/NavBar/NavBar'
import Carousal from './Component/Common/Carousal';
// import HorizontalComponent from './Component/NavBar/HorizontalComponent'
import Footer from './Component/Common/Footer';
import TableFile from './Component/Common/Table';
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  render() {
    return (
      <div className="text-center container-fluid ">
         <NavBarComponent />
        <Carousal />
        <TableFile/>
        {/* <Parent />
        <HorizontalComponent/> */}
        {/* <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button> */}
        {/* <Refs/> */}
        {/* <ForwardRefs /> */}
        {/* <CallBackRefs/> */}
        <Formics />
        <Footer/>

      </div>
    )
  }
}

export default App;

