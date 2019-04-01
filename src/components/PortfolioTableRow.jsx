import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPortfolioStockByLabel } from '../reducers/portfolio';
import { getStockByLabel } from '../reducers/stocks';
import { formatCurrency } from '../utils';

const mapStateToProps = (state, ownProps) => {
  const { label, shares, boughtPrice } = getPortfolioStockByLabel(
    state,
    ownProps.label
  );
  const stock = getStockByLabel(state, label);
  const initialValue = shares * boughtPrice;
  const currentValue = (Number(shares) * Number(stock.price)).toFixed(2);
  const difference = currentValue - initialValue;
  return {
    label,
    shares,
    boughtPrice,
    initialValue,
    currentValue,
    difference
  };
};

class PortfolioTableRow extends Component {
  render() {
    const {
      label,
      shares,
      boughtPrice,
      initialValue,
      currentValue,
      difference
    } = this.props;
    return (
      <tr>
        <th scope="row">{label}</th>
        <td>{shares}</td>
        <td>{formatCurrency(boughtPrice)}</td>
        <td>{formatCurrency(initialValue)}</td>
        <td>{formatCurrency(currentValue)}</td>
        <td>{formatCurrency(difference)}</td>
      </tr>
    );
  }
}

export default connect(mapStateToProps)(PortfolioTableRow);
