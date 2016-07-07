var React  = require('react');
var Chat = require('../components/Chat');
var ReactRouter = require('react-router');


var ChatContainer = React.createClass({
  contextTypes: {
router: React.PropTypes.object.isRequired
},
getInitialState: function () {
    return {
      isLoading: true,
      userInfo:[]
    }
  },
  componentDidMount: function(){
     var query = this.props.location.query;
     console.log('QUERY',query);
  },
render: function(){
      return(

            <Chat />
      )
  }
});
module.exports = ChatContainer
