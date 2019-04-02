import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStockByLabel } from '../../reducers/stocks/stocks-reducer';
import { formatCurrency } from '../../utils';
import { buyStockByLabel } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return getStockByLabel(state, ownProps.label);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBuyButtonClick: (label) => {
      const quantity = 1;
      dispatch(buyStockByLabel(label, quantity));
    }
  }
}

class StockTableRow extends Component {
  render() {
    const { label, volume, price } = this.props;
    return (
      <tr>
        <th scope="row">{label}</th>
        <td>{volume}</td>
        <td>{formatCurrency(price)}</td>
        <td>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => this.props.onBuyButtonClick(label)}
          >
            Buy
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockTableRow);
