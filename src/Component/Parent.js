import React from 'react'
import Button from 'react-bootstrap/Button'
import '../Component/NavBar/Navbar.css'
class Parent extends React.Component {

  getComponent = (arr) => {
    return arr.map(value => (
    
        <Button className='mt-4' color="danger" key={value} onClick={() => {
          alert("Button " + value + " is clicked")
        }}>{value} </Button>

    ))
  }

  render() {
    const components = this.getComponent([1, 2, 3, 4, 5]);
    return (
      <div>
        {components}
      </div>
    )
  }
}

export default Parent;