import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import firebaseDb from './firebase'
function App() {
	const [income, setIncome] = useState({});
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {

		firebaseDb.child('income').on('value', snapshot => {
			if (snapshot.val() != null) {
				setIncome({
					...snapshot.val()
				})
			}
		})

	}, []);

	useEffect(() => {
		let temp = 0;
		Object.keys(income).map((index) => (

			temp += parseInt(income[index].price)
		))
		setTotalIncome(temp);
	}, [income])

	return (
		<div className="App">
			<Header totalIncome={totalIncome} />
			<IncomeForm income={income} setIncome={setIncome} />
			<IncomeList income={income} setIncome={setIncome} />
		</div>
	);
}

export default App;
