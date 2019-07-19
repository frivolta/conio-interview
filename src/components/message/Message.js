import React, { Component } from 'react'
import PropTypes from 'prop-types';

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