import React from 'react';
import ChildComponent from './ChildComponent';
import Button from 'react-bootstrap/Button'

export default class ForwardsRefs extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    handleFocus = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div className='mt-5'>
                <ChildComponent ref={this.inputRef} />
                <div className='mt-3'>
                <Button  color="danger" onClick={this.handleFocus}>Submit</Button>
                </div>
               
            </div>
        )
    }
}