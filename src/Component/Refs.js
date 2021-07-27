import React, { Component } from 'react';

// export default class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.myRef = React.createRef();
//     }
//     render() {
//       return <div ref={this.myRef} />;
//     }
//   }

  //This code uses a ref to store a reference to a DOM node:

  export default class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }