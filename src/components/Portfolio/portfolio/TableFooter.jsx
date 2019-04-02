import React from 'react';
import { connect } from 'react-redux';
import { getPortfolioProfit, getPortfolioValue } from '../../../reducers/portfolio/portfolio-reducer';
import { formatCurrency } from '../../../utils';

const mapStateToProps = (state, ownProps) => {
  return {
    profit: getPortfolioProfit(state),
    value: getPortfolioValue(state),
  };
};

const TableFooter = ({ profit, value }) => {
  return (
    <tfoot>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td>{formatCurrency(value)}</td>
        <td>{formatCurrency(profit)}</td>
      </tr>
    </tfoot>
  );
};

export default connect(mapStateToProps)(TableFooter);
