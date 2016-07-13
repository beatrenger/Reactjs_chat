var React  = require('react');
var PUBNUB = require('pubnub');
var Chat = require('../components/Chat');
var ChatForm = require('../components/ChatForm');
var PropTypes = React.PropTypes;



var pubnub = PUBNUB.init({  // chat  plugin
    publish_key: 'pub-c-4dfb17ad-b4c4-4e2b-acb5-afb7a1bd0576',
    subscribe_key: 'sub-c-a08b87a8-4864-11e6-ba28-02ee2ddab7fe',
    error: function (error) {
        console.log('Error:', error);
    }
});




var ChatContainer = React.createClass({

handleMessageChange: function(e) {

    this.setState({UserMessage: e.target.value});
},
generateId: function () {
		return Math.floor(Math.random()*90000) + 10000;
	},
getInitialState: function () {
    return {
      isLoading: true,
      UserMessage: '',
      userInfo: '',
      data: [

			],

    }
  },
  recievedMessage: function(m){
    var data = this.state.data;
    this.setState({
          data : this.state.data.concat(m)
    });
  },
 doSubmit: function (e) {
      e.preventDefault();
      var comment = this.state.UserMessage;
      var user = this.state.userInfo;
      var id =  this.generateId().toString();
      var data = [
            {id, comment, user}
          ]
      pubnub.publish({
    channel : 'my_channel',
    message : data,
    callback : function(m){
        console.log(m)
    }
});
      this.setState({
          UserMessage: '',
      });
},
  componentDidMount: function(){
    pubnub.subscribe({
      channel : 'my_channel',
      message: (m) => this.recievedMessage(m)
  });
    var query = this.props.location.query;
      this.setState({
        isLoading: false,
        userInfo: query.username
     })
  },
render: function(){


      return(
        <div className="well col-xs-6 col-xs-offset-3" style={{ overflow:'hidden'}} >
            <Chat
            data={this.state.data}
            userInfo={this.state.userInfo}
             />

                <ChatForm
                onHandleMessage={this.handleMessageChange}
                userInfo={this.state.userInfo}
                onDoSubmit={this.doSubmit}
                onMessage={this.state.UserMessage}
                />


             </div>
      )
  }
});




module.exports = ChatContainer;
