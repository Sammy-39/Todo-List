const SearchTodoForm = (props) =>{
    return (
        <div className='my-5 col-10 col-sm-9 col-md-8 col-lg-6 col-xl-5'>
            <h5 className='text-center mb-3'> Search Todo </h5>
            <form className='search-form'>
                <i class="fas fa-search search"></i>
                <input type="text" className="form-control" 
                value={props.value} onChange={(e)=>props.change(e)}
                placeholder='Search item' / >
            </form>
        </div>
    )
}

export default SearchTodoForm