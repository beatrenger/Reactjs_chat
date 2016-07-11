
var React  = require('react');



var ChatContent = React.createClass({

  	render: function() {

  		return (

      <li className="list-group-item clearfix">

        <div   role="group">
          {this.props.task}:  {this.props.comment}
          </div>
      </li>

  		);
  	}
});
module.exports = ChatContent;
