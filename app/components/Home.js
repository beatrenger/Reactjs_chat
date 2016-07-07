var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

function Home () {
  return (
    <MainContainer>
      <h1>Basic Chat App</h1>
      <p className='lead'> Simple Web Chat - Chat with Random People </p>
      <Link to='/user_name'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainContainer>
  )
}

module.exports = Home;
