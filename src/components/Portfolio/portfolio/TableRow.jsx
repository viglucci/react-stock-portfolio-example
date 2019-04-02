import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPortfolioOrderById } from '../../../reducers/portfolio/portfolio-reducer';
import { formatCurrency } from '../../../utils';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return getPortfolioOrderById(state, id);
};

class TableRow extends Component {
  render() {
    const {
      label,
      shares,
      boughtPrice,
      initialValue,
      currentValue,
      profit
    } = this.props;
    return (
      <tr>
        <th scope="row">{label}</th>
        <td>{shares}</td>
        <td>{formatCurrency(boughtPrice)}</td>
        <td>{formatCurrency(initialValue)}</td>
        <td>{formatCurrency(currentValue)}</td>
        <td>{formatCurrency(profit)}</td>
      </tr>
    );
  }
}

export default connect(mapStateToProps)(TableRow);
