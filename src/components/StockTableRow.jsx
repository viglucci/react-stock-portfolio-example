import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStockByLabel } from '../reducers/stocks';
import { formatCurrency } from '../utils';

const mapStateToProps = (state, ownProps) => {
  return getStockByLabel(state, ownProps.label);
};

class StockTableRow extends Component {
  render() {
    const { label, sales, price } = this.props;
    return (
      <tr>
        <th scope="row">{label}</th>
        <td>{sales}</td>
        <td>{formatCurrency(price)}</td>
      </tr>
    );
  }
}

export default connect(mapStateToProps)(StockTableRow);
