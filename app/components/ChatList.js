var React  = require('react');




var ChatList = React.createClass({

render: function(props){
  var listNodes = this.props.data.map(function (listItem) {
    return (
      <TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.user} complete={listItem.comment} />
    );
  },this);
          <div>{this.props.userInfo}</div>

  }
});
module.exports = ChatList;
