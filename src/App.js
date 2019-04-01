import React, { Component } from 'react';
import StockTable from './components/StockTable.jsx';
import Portfolio from './components/Portfolio.jsx';

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm">
            <StockTable />
          </div>
          <div className="col-sm">
            <Portfolio />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
