import React, { useState, useEffect } from 'react';
import DropdownTable from './DropdownTable';
import './App.css'
function App() {
  const [holdingsData, setHoldingsData] = useState(null);
  const [equityData, setEquityData] = useState([]);
  const [bondData, setBondData] = useState([]);
  const [cashData, setCashData] = useState([]);
  const [fund, setFund] = useState([]);
  const [loan, setLoan] = useState([]);
  const [real, setReal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://canopy-frontend-task.vercel.app/api/holdings');
        const data = await response.json();
        setHoldingsData(data.payload);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    if (holdingsData) {
      organizeDataByAssetClass();
    }
  }, [holdingsData]);

  const organizeDataByAssetClass = () => {
    if (!holdingsData) return;

    const equity = holdingsData.filter(item => item.asset_class === 'Equity').map(item => [
      item.name,
      item.ticker,
      item.asset_class,
      item.avg_price,
      item.market_price,
      item.market_value_ccy,
      item.latest_chg_pct
    ]);
    setEquityData(equity);

    const bonds = holdingsData.filter(item => item.asset_class === 'Bond').map(item => [
      item.name,
      item.ticker,
      item.asset_class,
      item.avg_price,
      item.market_price,
      item.market_value_ccy,
      item.latest_chg_pct
    ]);
    setBondData(bonds);

    const cash = holdingsData.filter(item => item.asset_class === 'Cash').map(item => [
      item.name,
      item.ticker,
      item.asset_class,
      item.avg_price,
      item.market_price,
      item.market_value_ccy,
      item.latest_chg_pct
    ]);
    setCashData(cash);

    const fund = holdingsData.filter(item => item.asset_class === 'Fund').map(item => [
      item.name,
      item.ticker,
      item.asset_class,
      item.avg_price,
      item.market_price,
      item.market_value_ccy,
      item.latest_chg_pct
    ]);
    setFund(fund);
    const loan = holdingsData.filter(item => item.asset_class === 'Loan').map(item => [
      item.name,
      item.ticker,
      item.asset_class,
      item.avg_price,
      item.market_price,
      item.market_value_ccy,
      item.latest_chg_pct
    ]);
    setLoan(loan);
    const real = holdingsData.filter(item => item.asset_class === 'Real Estate').map(item => [
      item.name,
      item.ticker,
      item.asset_class,
      item.avg_price,
      item.market_price,
      item.market_value_ccy,
      item.latest_chg_pct
    ]);
    setReal(real);

  };
  const headings = ['Name', 'Ticker', 'Asset Class', 'Avg Price', 'Market Price', 'Market Value CCY', 'Latest Change Percentage'];

  return (
    <div className='main'>
   <div class="container">
  <DropdownTable headings={headings} content={real} tag="Real Estate" />
</div>
<div class="container">
  <DropdownTable headings={headings} content={equityData} tag="Equity" />
</div>
<div class="container">
  <DropdownTable headings={headings} content={bondData} tag="Bond" />
</div>
<div class="container">
  <DropdownTable headings={headings} content={cashData} tag="Cash" />
</div>
<div class="container">
  <DropdownTable headings={headings} content={loan} tag="Loan" />
</div>
<div class="container">
  <DropdownTable headings={headings} content={fund} tag="Fund" />
</div>

    </div >
  );
}

export default App;
