import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import StockTableRow from './StockTableRow';

const mapStateToProps = (state, ownProps) => {
  return {
    labels: state.entities.stocks.allLabels
  };
};

class StockTable extends Component {
  render() {
    const { labels } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Sales</th>
            <th>Latest Price</th>
          </tr>
        </thead>
        <tbody>{labels.map((label) => {
            return <StockTableRow key={label} label={label} />
        })}</tbody>
      </Table>
    );
  }
}

export default connect(
  mapStateToProps
)(StockTable);
