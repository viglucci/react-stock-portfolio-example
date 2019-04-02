import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table as BootstrapTable } from 'reactstrap';
import TableRow from '../portfolio/TableRow';
import { getPortfolioOrderIdsList } from '../../../reducers/portfolio/portfolio-reducer';

const mapStateToProps = (state, ownProps) => {
  return {
    orders: getPortfolioOrderIdsList(state)
  };
};

class Table extends Component {
  render() {
    const { orders } = this.props;
    return (
      <BootstrapTable>
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
            return <TableRow key={id} id={id} />;
          })}
        </tbody>
      </BootstrapTable>
    );
  }
}

export default connect(mapStateToProps)(Table);
