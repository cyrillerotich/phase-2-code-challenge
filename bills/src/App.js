import './App.css';
import React, { useState , useEffect} from 'react';
import Table from './Table';
import Form from './Form';
import Search from './Search';

function App() {

  // let transactionsA = [];
  const [transactionsB, setTransactionsB] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((r) => r.json())
    .then((data) => {
      // json(data)
      console.log(data);
      // transactions = [...data]
      setTransactionsB([...data])
    })
  
  }, [])
  return (
    <div className="App">
      <p> HELLO WORLD</p>
      <Search/>
      <Form/>
    </div>
  );
}

export default App;
