var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require("../containers/PromptContainer");
var ChatContainer   = require("../containers/ChatContainer");
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='user_name' header='Chat User' component={PromptContainer} />
      <Route path='chatchannel' header='The Channel' component={ChatContainer} />
    </Route>
  </Router>
);

module.exports = routes;
