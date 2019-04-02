import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import PortfolioTableRow from './PortfolioTableRow';
import { getPortfolioOrderIdsList } from '../reducers/portfolio/portfolio-reducer';

const mapStateToProps = (state, ownProps) => {
  return {
    orders: getPortfolioOrderIdsList(state)
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
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((id) => {
            return <PortfolioTableRow key={id} id={id} />;
          })}
        </tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
