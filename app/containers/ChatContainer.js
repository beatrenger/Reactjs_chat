var React  = require('react');
var Chat = require('../components/Chat');
var ChatForm = require('../components/ChatForm');


var ChatContainer = React.createClass({
  contextTypes: {
router: React.PropTypes.object.isRequired
},  doSubmit: function (e) {
        console.log('submited');
},
getInitialState: function () {
    return {
      isLoading: true,
      userInfo: '',
      data: [
				{"id":"00001","comment":"HEY WHATS UP!","user":"beatrenger"},
				{"id":"00002","comment":"NOTHING MUCH YOU?","user":"beatrenger1"},
        {"id":"00003","comment":"SAME lol... buzz killz","user":"beatrenger2"}
			]
    }
  },
  componentDidMount: function(){
     var query = this.props.location.query;
     this.setState({
        isLoading: false,
        userInfo: query.username
     })
  },
render: function(){
      return(
        <div className="well col-xs-6 col-xs-offset-3">
            <Chat
            data={this.state.data}
            userInfo={this.state.userInfo}
             />

                <ChatForm
                userInfo={this.state.userInfo}
                onDoSubmit={this.doSubmit}
                />


             </div>
      )
  }
});
module.exports = ChatContainer;
