import { useState, useEffect } from 'react'
import Transaction from './components/Transaction'
import AddTransaction from './components/AddTransaction'

function App() {

  const [transactions, settransactions] = useState([])
  const [lastUsedId, setlastUsedId] = useState(14)

  const handleAddTransaction =(newTransactionData)=>{
    const transactionUpdate = {...newTransactionData, id: lastUsedId + 1};
settransactions([...transactions, transactionUpdate])
setlastUsedId(lastUsedId + 1)
  }

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        settransactions(data)
      })

  }, [])
  console.log(transactions)

  return (
    <>
      <AddTransaction onAddTransaction={handleAddTransaction}/>
      <Transaction transactionData={transactions} />
    </>

  )
}

export default App