import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import  categories from "./Categories";

const schema = z.object({
    item: z.string().min(3, {message: 'Item must be atleast 3 characters '}),
    amount: z.number({invalid_type_error: 'Amount is required'}).min(1),
    category: z.enum(categories, {
        errorMap: () => ({message: 'Category is required'})
    })
});

const ExpenseForm = ({handleAddExpense}) => {

    const {register, handleSubmit, formState: {errors}} = useForm ({resolver: zodResolver(schema)});

    const onSubmit = data => handleAddExpense(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 row g-5 align-items-center">
            <div className="col-auto">
                <label htmlFor="item" className="form-label">Item:</label>
            </div>
            <div className="col-sm-10">
                <input {...register('item')} id="item" type="text" className="form-control" />
                {errors.item && <p className="text-danger">{errors.item.message}</p>}
            </div>
        </div>

        <div className="mb-4 row g-4 align-items-center">
            <div className="col-auto">
                <label htmlFor="amount" className="form-label">Amount:</label>
            </div>
            <div className="col-sm-10">
                <input {...register('amount', { valueAsNumber: true })} id="amount" type="text" className="form-control" />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
        </div>

        <div className="mb-3 row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="category" className="form-label">Category:</label>
            </div>
            <div className="col-sm-10">
                <select className="form-select" aria-label="Default select example" {...register('category')}>
                    <option></option>
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
        </div>
        <button className="btn btn-primary d-grid gap-2 col-2 mx-auto">Submit</button>
        </form>
    );
}
 
export default ExpenseForm;