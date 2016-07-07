var React  = require('react');
var Prompt = require('../components/Prompt');


var PromptContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired  // doesnt not scale well; have limited use; works well for routing
    },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handleSubmitUser: function(e){
      e.preventDefault();
      var username = this.state.username;

      this.context.router.push({
        pathname: '/chatchannel',
        query:{
          username: username,
        }
      });

  },
  handleUpdateUser: function (event) {
      this.setState({
        username: event.target.value
      });
    },
  render: function(){
      return(
            <Prompt
            onSubmitUser={this.handleSubmitUser}
              onUpdateUser={this.handleUpdateUser}
              username={this.state.username}
                header={this.props.route.header}
            />
      )
  }
});
module.exports = PromptContainer
