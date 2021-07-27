  
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    // import { shallow } from 'enzyme';
    
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
       
    describe('Addition', () => {
      it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
    });
      
    // describe('Addition', () => {
    //   it('knows that 2 and 2 make 4', () => {
    //     expect(2 + 2).toBe(5);
    //   });
    // });

    // describe('App component', () => {
    //   it('starts with a count of 0', () => {
    //     const wrapper = shallow(<App />);
    //     const text = wrapper.find('p').text();
    //     expect(text).toEqual('Count: 0');
    //   });
    // });