import React, { Component } from 'react'
import PropTypes from 'prop-types';


//@ToDO: Convert to stateless method, class is not needed 
class Message extends Component {
  render() {
    return (
      <div>
        <div className="Message">
          <h3>{this.props.message}</h3>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.string
}

export default Message;