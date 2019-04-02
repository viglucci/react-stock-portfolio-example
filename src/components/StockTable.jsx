import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import StockTableRow from './StockTableRow';
import { getLabelsList } from '../reducers/stocks/stocks-reducer';

const mapStateToProps = (state, ownProps) => {
  return {
    labels: getLabelsList(state)
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
            <th>Volume</th>
            <th>Latest Price</th>
          </tr>
        </thead>
        <tbody>
          {labels.map((label) => {
            return <StockTableRow key={label} label={label} />;
          })}
        </tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps)(StockTable);
