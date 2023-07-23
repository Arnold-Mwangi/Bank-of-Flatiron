import React, { useState } from "react"
function AddTransaction({ onAddTransaction }) {

    const [formData, setformData] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""

    })

    const handleChange = (event) => {

        const { name, value } = event.target;

        setformData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTransactionData = {
            ...formData,
            id: 0,
            amount: parseFloat(formData.amount)
        };

        onAddTransaction(newTransactionData);
        setformData({
            id: '',
            date: '',
            description: '',
            category: '',
            amount: '',
        });

    };
    return (
        <div className="form_holder">
            <h2>Add a transaction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    required
                />
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount"
                    required
                />
                <button type="submit"><i className="fas fa-plus-circle">Transaction</i></button>
            </form>
        </div>

    )
}

export default AddTransaction