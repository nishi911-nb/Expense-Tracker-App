const ExpenseList = ({expenseList, handleDelete}) => {

    return ( 
        <table className="table table-bordered border-secondary mt-3">
            <thead>
                <tr>
                <th scope="col">Item</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {expenseList.map(list => {
                    return(
                        <tr key={list.id}>
                        <td>{list.item}</td>
                        <td>${list.amount}.00</td>
                        <td>{list.category}</td>
                        <td><button className="btn btn-outline-danger" onClick={() => handleDelete(list.id)}>Delete</button></td>
                        </tr>
                    );
                })}   
                <tr>
                <td>Total</td>
                <td>${expenseList.reduce((acc, curr) => acc + curr.amount, 0)}.00</td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default ExpenseList;