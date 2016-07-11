var React  = require('react');
var ChatContent = require('../components/ChatContent');



var Chat = React.createClass({

render: function(props){
  var listNodes = this.props.data.map(function (listItem) {
    return (

     <ChatContent key={listItem.id} task={listItem.user} comment={listItem.comment} />
    );
  },this);

  return (
    <ul className="list-group unstyled">
      {listNodes}
    </ul>
  );


  }
});
module.exports = Chat;
