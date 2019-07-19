import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Price extends Component {
  render() {
    const { isLoading } = this.props.isLoading;

    return (
      <div>
        <div className={isLoading ? `Price Price--loading` : `Price`}>
          <h1>{this.props.children}</h1>
        </div>
      </div>
    )
  }
}

Price.propTypes = {
  children: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    isLoading: state.loadingReducer,
  };
};

export default connect(mapStateToProps)(Price);