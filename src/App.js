import React, { Component } from 'react';
import StockTable from './components/StockTable.jsx';
import Portfolio from './components/Portfolio.jsx';

class App extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col-4">
            <StockTable />
          </div>
          <div className="col-8">
            <Portfolio />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
