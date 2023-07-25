import TableRow from "./TableRow"

function Table(props) {

    const tableRowArray = props.transactionsData.map( (transaction) => {
        return <TableRow data={transaction}/>
    } )

    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {tableRowArray}
            </tbody>

        </table>
    )
}
export default Table
