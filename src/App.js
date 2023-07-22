import {useState, useEffect} from 'react'
import Transaction from './components/Transaction'

function App(){

  const[transactions, settransactions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      settransactions(data)
    })

  }, [])
  console.log(transactions)

  return(
    <Transaction transactionData={transactions} />
  )
}

export default App