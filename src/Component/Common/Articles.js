import React from 'react';

const Articles = () => {
  return (
    <div className='about-us-content'>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          <img  className="docker-img" src=
            "https://cdn.xxl.thumbs.canstockphoto.com/article-search-magnifying-glass-enlarging-part-of-red-3d-word-with-reflection-stock-illustration_csp3248566.jpg"
            alt="neww" />
            <div>
            <img className='width-naptol' src="https://blogct.creative-tim.com/blog/content/images/wordpress/2020/05/reactjs-article-web-developers-768x512.jpg" alt="new-one"/>
            </div>
           
        </div>
        <div className='col-lg-6 col-md-6'>
          <h3>1. Why You Should Build Your Portfolio with React</h3>
          <h6>
            This article points out why React is the best programming language for building your portfolio website. React comes with a number of features that help speed up your workflow. You’ll be able to create and use components like project thumbnails without having to copy and paste the same code each time. You can also deploy your React app to Github Pages, which hosts your website for free.
            Also, the article comes with a very useful step by step mini tutorial on how to build a simple React portfolio app and experience its power firsthand.</h6>
          <hr />
          <h3>
            2. Vue vs React: Which is the Better Framework?
          </h3>
          <h6>
            When you are searching for a framework to fit your needs, at some point, you will have to choose between 2 or 3 frameworks. This article will help you decide between 2 very popular JavaScript choices – VueJS and React.
            They have a lot of similarities, both use a Virtual DOM and possess a reactive and component-based structure.
            Reading this article you will understand what are the strong-points and shortcomings of these two technologies and which one is most favorable to developers and the growth of the business.
          </h6>
          <hr />
          <h3>
            3. Difference Between React.js and React Native?
          </h3>
          <h6>
            When you are a beginner it is very possible to be confused by the name differences: It is React or ReactJS (like the difference between Angular and AngularJS)…it means the same as React Native, are they similar or totally different?
            Well, this article will very much help you. You will learn what are the strengths of each framework that should give you a fair idea of what makes them different.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Articles;