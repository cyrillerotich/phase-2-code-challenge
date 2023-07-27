function TableRow(props) {
    return (
        <tr>
            <td>{props.data.description}</td>
            <td>{props.data.category}</td>
            <td>{props.data.date}</td>
            <td>{props.data.amount}</td>
        </tr>
    )
}

export default TableRow