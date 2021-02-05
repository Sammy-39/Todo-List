
const AddToDoForm = (props) =>{
    return(
        <div className='col-10 col-sm-9 col-md-8 col-lg-6 col-xl-5'>
            <h4 className='text-center mb-3'> Add Todo </h4>
            <form onSubmit={(e)=>props.addTodo(e)}>
                <input type="text" className="form-control" 
                value={props.value} onChange={(e)=>props.change(e)}
                placeholder='Todo item' / >
            </form>
        </div>
    )
}

export default AddToDoForm