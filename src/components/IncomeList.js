import React from 'react';
import IncomeItem from './IncomeItem';
import firebaseDb from '../firebase'
function IncomeList({ income, setIncome }) {

  const removeIncome = i => {
    // let temp = income.filter((v, index) => index != i);
    // setIncome(temp);
    firebaseDb.child(`income/${i}`).remove(
      err => {
        if (err) {
          console.log(err)
        }
      }
    )
  }

  const sortByDate = (a, b) => {
    return income[a].date - income[b].date;
  }

  return (
    <div className="income-list">
      {

        Object.keys(income).sort(sortByDate).map((index) => (
          <IncomeItem
            key={index}
            income={income[index]}
            index={index}
            removeIncome={removeIncome}
          />
        ))
      }
    </div>
  )
}

export default IncomeList;