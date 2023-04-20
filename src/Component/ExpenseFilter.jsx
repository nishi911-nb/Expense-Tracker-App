import categories from "./Categories";

const ExpenseFilter = ({handleFilterExpenses}) => {
    return ( 
        <div>
            <select className="form-select" onChange={(e) => handleFilterExpenses(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
        </div>
     );
}
 
export default ExpenseFilter;