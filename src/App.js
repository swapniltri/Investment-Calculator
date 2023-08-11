import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function App() {

  const [completeYearData, setCompleteYearData] = useState([]);

  const calculateHandler = (userInput) => {

    const yearlyData = [];
    let currentSavings = +userInput.curr;
    const yearlyContribution = +userInput.yearly;
    const expectedReturn = +userInput.interest / 100;
    const duration = +userInput.duration;
    let totalInvestmentYet = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      const totalInterest = yearlyInterest + (i > 0 ? Number(yearlyData[i - 1].totalInterestYet.replace(/[^0-9.-]+/g, "")) : 0);
      const investedCapital = totalInvestmentYet + (i + 1) * yearlyContribution;
      const totalSavings = currentSavings + yearlyInterest + yearlyContribution;
      currentSavings = totalSavings;

      yearlyData.push({
        year: i + 1,
        interestPerYear: formatter.format(yearlyInterest),
        totalInterestYet: formatter.format(totalInterest),
        investCapitalYet: formatter.format(investedCapital),
        totalSavingsYet: formatter.format(totalSavings)
      });
    }
    setCompleteYearData(yearlyData);
  }

  const resetHandler = () => {
    setCompleteYearData([]);
  }

  let showTable = false;
  if (completeYearData.length > 0) {
    showTable = true;
  }

  return (
    <div>
      <Header />
      <Form calculateHandlerUtil={calculateHandler} resetHandlerUtil={resetHandler} />

      {showTable && <Table completeData={completeYearData} />}
      {!showTable && <p style={{ textAlign: 'center' }}>No Investment Yet</p>}

    </div>
  );
}

export default App;
