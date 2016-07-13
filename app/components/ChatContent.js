
var React  = require('react');
var PropTypes = React.PropTypes;

var ChatContent = React.createClass({

  	render: function() {

  		return (

      <li className="list-group-item clearfix">

        <div   role="group">
       {this.props.user}:  {this.props.comment}
          </div>
      </li>

  		);
  	}
});

ChatContent.propTypes = {
  user: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}



module.exports = ChatContent;
