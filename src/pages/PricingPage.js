import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPrice } from '../redux/actions/pricingActions';
import Message from '../components/message/Message';
import Price from '../components/price/Price';

class PricingPage extends Component {
  componentDidMount() {
    this.props.getPrice();
  }

  render() {
    const { price } = this.props.pricing
    const { error } = this.props.error;
    const { isLoading } = this.props.isLoading;

    return (
      <div className="PricingPage">
        {(error === '' && isLoading === false) ?
          (
            <React.Fragment>
              <Price>{price.toString()}€</Price>
              <Message message="Since Last visit" />
            </React.Fragment>
          )
          :
          <Price>0.00€</Price>
        }
        {error && <Message message={error} />}
        {isLoading && <Message message="Loading Price" />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pricing: state.pricingReducer,
    isLoading: state.loadingReducer,
    error: state.errorReducer
  };
};
export default connect(mapStateToProps, { getPrice })(PricingPage);