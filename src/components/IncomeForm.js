import React, { useRef } from 'react';
import firebaseDb from '../firebase'
function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);


    firebaseDb.child('income').push({
      "desc": desc.current.value,
      "price": price.current.value,
      "date": newD.getTime()
    },
      err => {
        if (err) {
          console.log(err)
        }
      })
    // setIncome([...income, {
    //     "desc": desc.current.value,
    //     "price": price.current.value,
    //     "date": newD.getTime()
    //   }]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  }

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input type="text" name="desc" id="desc" placeholder="Income Description..." ref={desc} />
        <input type="number" name="price" id="price" placeholder="Price..." ref={price} />
        <input type="date" name="date" id="date" placeholder="Income date..." ref={date} />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  )
}

export default IncomeForm;