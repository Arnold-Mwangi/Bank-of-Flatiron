export default function Transactiontable({ id, date, category, description, amount }) {
    return (

        <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td>
                <button>Delete</button>
                <button>Edit</button>
            </td>
        </tr>

    )
}