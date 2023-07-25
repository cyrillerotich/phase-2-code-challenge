import './App.css';
import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';
import Search from './Search';

function App() {

  // let transactionsA = [];
  const [transactionsB, setTransactionsB] = useState([])
  const [searchTransactionsB, setSearchTransactionsB] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((data) => {
        // json(data)
        console.log(data);
        // transactions = [...data]
        setTransactionsB([...data])
        // setSearchTransactionsB([...data])
      })

  }, [])
  function handleSearch(searchText) {
    console.log(searchText)
    setSearchInput(searchText)
    const newTransactionArray = [...transactionsB].filter((item) => {
      return item.description.includes(searchText)
    })
    setSearchTransactionsB(newTransactionArray)
  }
  function handleAddTransaction(newTransaction) {
    console.log(newTransaction);
    setTransactionsB([...transactionsB,newTransaction])
  }
  return (
    <div className="App">
      <h1>BANK FLATIRON</h1>
      <Form handleAddTransaction={handleAddTransaction} />
      <Search handleSearch={handleSearch} />
      <Table transactionsData={searchInput === "" ? transactionsB : searchTransactionsB} />
    </div>
  );
}

export default App;
