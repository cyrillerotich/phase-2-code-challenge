import TableRow from "./TableRow"

function Table({transactionsData }) {

    const tableRowArray = transactionsData.map( (transaction, index) => {
        return <TableRow key ={index} data={transaction}/>
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
