import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import PortfolioTableRow from './PortfolioTableRow';
import { getPortfolioOrdersList } from '../reducers/portfolio';

const mapStateToProps = (state, ownProps) => {
  return {
    orders: getPortfolioOrdersList(state)
  };
};

class Portfolio extends Component {
  render() {
    const { orders } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Shares</th>
            <th>Bought Price</th>
            <th>Initial Value</th>
            <th>Current Value</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((label) => {
            return <PortfolioTableRow key={label} label={label} />;
          })}
        </tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
