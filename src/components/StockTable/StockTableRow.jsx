import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStockByLabel } from '../../reducers/stocks/stocks-reducer';
import { formatCurrency } from '../../utils';

const mapStateToProps = (state, ownProps) => {
  return getStockByLabel(state, ownProps.label);
};

class StockTableRow extends Component {
  render() {
    const { label, volume, price } = this.props;
    return (
      <tr>
        <th scope="row">{label}</th>
        <td>{volume}</td>
        <td>{formatCurrency(price)}</td>
      </tr>
    );
  }
}

export default connect(mapStateToProps)(StockTableRow);
