import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Transaction from './components/Transaction'
import AddTransaction from './components/AddTransaction'
import Search from './components/search'


function App() {

  const [transactions, settransactions] = useState([])
  const [lastUsedId, setlastUsedId] = useState(14)
  const [filteredTransactions, setfilteredTransactions] = useState([])
  const [transactiontodelete, settransactiontodelete] = useState(null)

  useEffect(() => {
    fetch("https://bank-of-flatiron-gcma.onrender.com/transactions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        settransactions(data)
      })

  }, [])
  console.log("hey",transactions.data)

  useEffect(() => {
    setfilteredTransactions(transactions)
  }, [transactions])

  useEffect(() => {
    if (transactiontodelete !== null) {
      const updatedTable = filteredTransactions.filter(
        (transaction) => transaction.id !== transactiontodelete
      )
      setfilteredTransactions(updatedTable);
      settransactiontodelete(null)
    }
  }, [transactiontodelete, filteredTransactions])

  const handleAddTransaction = (newTransactionData) => {
    const transactionUpdate = { ...newTransactionData, id: lastUsedId + 1 };
    settransactions([...transactions, transactionUpdate])
    setlastUsedId(lastUsedId + 1)
  }

  const handleDeleteTransaction = (id) => {
    settransactiontodelete(id)
  }

  const handleSearch = (search, searchBy) => {
    let newfilteredTransactions = transactions;
    if (searchBy === 'description') {
      newfilteredTransactions = transactions.filter((transaction) =>
        transaction.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    } else if (searchBy === 'category') {
      newfilteredTransactions = transactions.filter((transaction) =>
        transaction.category.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    } else if (searchBy === 'date') {
      newfilteredTransactions = transactions.filter((transaction) =>
        transaction.date.includes(search)
      );
    } else if (searchBy === 'amount') {
      // Assume the query is a valid number
      newfilteredTransactions = transactions.filter(
        (transaction) => transaction.amount === parseFloat(search)
      );
    }



    // Set the filtered transactions in the state
    setfilteredTransactions(newfilteredTransactions);
    console.log(transactions)
    console.log("yoh", filteredTransactions)

  }

  return (
    <>
      <Header />
      <div className='container'>
      <Search onSearch={handleSearch} />
      <AddTransaction onAddTransaction={handleAddTransaction} />
      <Transaction
        transactionData={filteredTransactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      </div>
     
    </>

  )
}

export default App