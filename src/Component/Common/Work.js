import React from 'react';
import { Accordion } from 'react-bootstrap';
import AccordianFile from './AccordianFile'
  
const Works = () => {
  return (
    <div className='mb-4'>
      <div className='focus-text-color'>
      <h3>I focus on crafting web using Java,Spring Boot, React JS, React Native. New Technologies are always on my sharp eye.</h3>
      </div>
       <img 
      src="https://img.jagranjosh.com/imported/images/E/Articles/imp-of-work-ex.jpg"
      alt="new"/>
        <AccordianFile/>
    </div>
  
  );
};
  
export default Works;