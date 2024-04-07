import { useState } from 'react'

function App() {
  // add note here
  const [showMon, setShowMon] = useState(true);
  const [showTue, setShowTue] = useState(true);
  const [showWed, setShowWed] = useState(true);
  const [showThu, setShowThu] = useState(true);
  const [showFri, setShowFri] = useState(true);
  const [showSat, setShowSat] = useState(true);
  const [showSun, setShowSun] = useState(true);

  return (

    <div className='app'>
      {/* header including balance and logo */}
      <div className='header'>
        <div>
          <h2 className='balanceTitle'>My Balance</h2>
          <p className='totalBalance'>$921.48</p>
        </div>
        <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23"/></g></svg>
      </div>

      <div className='expenseGraph'>
        {/* week summary and expense graph */}

        <h1 className='graphTitle'>Spending - Last 7 days</h1>
        <div className='graph'>
          
          {/* interactice graph showing amount spent per day  */}
          
          <div className='graphBar'>
          <span className='hiddenAmount '>{showMon ? "" : "$10.00"}</span>
          <button onClick={() => setShowMon(!showMon) } className='day' id='mon'></button>
          <span>mon</span>
          </div>

          <div className='graphBar'>
          <span className='hiddenAmount '>{showTue ? "" : "$10.00"}</span>
          <button onClick={() => setShowTue(!showTue) } className='day' id='tue'></button>
          <span>tue</span>
          </div>

          <div className='graphBar'>
          <span className='hiddenAmount '>{showWed ? "" : "$52.36"}</span>
          <button onClick={() => setShowWed(!showWed) } className='day' id='wed'></button>
          <span>wed</span>
          </div>

          <div className='graphBar'>
          <span className='hiddenAmount '>{showThu ? "" : "$31.07"}</span>
          <button onClick={() => setShowThu(!showThu) } className='day' id='thu'></button>
          <span>thu</span>
          </div>

          <div className='graphBar'>
          <span className='hiddenAmount '>{showFri ? "" : "$10.00"}</span>
          <button onClick={() => setShowFri(!showFri) } className='day' id='fri'></button>
          <span>fri</span>
          </div>

          <div className='graphBar'>
          <span className='hiddenAmount '>{showSat ? "" : "$40.00"}</span>
          <button onClick={() => setShowSat(!showSat) } className='day' id='sat'></button>
          <span>sat</span>
          </div>

          <div className='graphBar'>
          <span className='hiddenAmount '>{showSun ? "" : "$10.00"}</span>
          <button onClick={() => setShowSun(!showSun) } className='day' id='sun'></button>
          <span>sun</span>
          </div>

        </div>

      </div>

      {/* month summary */}
      <div className='expenseSummary'>
           <div className='expense'>
            <span>Total this month</span>
            <span className='monthBalance'>$478.33</span>
          </div>

          <div className='percentage'>
            <span>+2.4%</span>
            <span>from last month</span>
          </div>
      </div>

    </div>
      
  )
}

export default App
