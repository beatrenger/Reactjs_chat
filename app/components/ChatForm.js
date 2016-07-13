
var React  = require('react');



var ChatForm = React.createClass({

  	render: function() {
    return (

        <div className="commentForm vert-offset-top-2">
      <hr />
      <div className="clearfix">
        <form className="todoForm form-horizontal" onSubmit={this.props.onDoSubmit}>
          <div className="form-group">
            <label htmlFor="User" className="col-md-2 control-label">{this.props.userInfo} </label>
            <div className="col-md-10">
            <input type="text" id="message" ref="message" className="form-control" onChange={this.props.onHandleMessage} placeholder="Send your Message :)" value={this.props.onMessage} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-2 text-right">
      <input type="submit" value="Send" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </div>

  		);
  	}
});
module.exports = ChatForm;
