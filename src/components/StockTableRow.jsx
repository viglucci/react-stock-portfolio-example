import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.entities.stocks.byLabel[ownProps.label]
  };
};

class StockTableRow extends Component {
  render() {
    const { label, sales, latestPrice } = this.props;
    return (
      <tr>
        <th scope="row">{label}</th>
        <td>{sales}</td>
        <td>{latestPrice}</td>
      </tr>
    );
  }
}

export default connect(mapStateToProps)(StockTableRow);
