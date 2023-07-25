import Transactiontable from "./Transactiontable"

export default function Transaction({transactionData, onDeleteTransaction}){
  console.log("gggg",transactionData);

    return(
        <div className="table_holder">
        <table className="custom-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
            {transactionData.map((item) => (
              <Transactiontable
                key={item.id}
                id={item.id}
                date={item.date}
                description={item.description}
                category={item.category}
                amount={item.amount}
                onDeleteTransaction={onDeleteTransaction}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
       
    
}