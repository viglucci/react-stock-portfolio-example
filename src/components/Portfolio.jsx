import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import PortfolioTableRow from './PortfolioTableRow';
import { getPortfolioLabelsList } from '../reducers/portfolio';

const mapStateToProps = (state, ownProps) => {
  return {
    labels: getPortfolioLabelsList(state)
  };
};

class Portfolio extends Component {
  render() {
    const { labels } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Shares</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {labels.map((label) => {
            return <PortfolioTableRow key={label} label={label} />;
          })}
        </tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
