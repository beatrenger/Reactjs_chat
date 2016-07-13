var React  = require('react');
var ChatContent = require('../components/ChatContent');
var ReactDOM = require('react-dom');


var Chat = React.createClass({
  componentDidUpdate() {
    var node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
  },
render: function(props){
  var listNodes = this.props.data.map(function (listItem) {

    return (

     <ChatContent key={listItem.id} task={listItem.user} comment={listItem.comment} />
    );
  },this);

  return (
    <ul className="list-group unstyled" style={{maxHeight:"500px" , height:"100%",overflowY:'scroll'}}>
      {listNodes}
    </ul>
  );


  }
});
module.exports = Chat;
