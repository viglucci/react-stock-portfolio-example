import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPortfolioStockByLabel } from '../reducers/portfolio';
import { getStockByLabel } from '../reducers/stocks';
import { formatCurrency } from '../utils';

const mapStateToProps = (state, ownProps) => {
  const { label, shares } = getPortfolioStockByLabel(state, ownProps.label);
  const stock = getStockByLabel(state, label);
  return {
    label,
    shares,
    value: (Number(shares) * Number(stock.price)).toFixed(2)
  }
};

class PortfolioTableRow extends Component {
  render() {
    const { label, shares, value } = this.props;
    return (
      <tr>
        <th scope="row">{label}</th>
        <td>{shares}</td>
        <td>{formatCurrency(value)}</td>
      </tr>
    );
  }
}

export default connect(mapStateToProps)(PortfolioTableRow);
