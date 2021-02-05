
const FilterTab = (props) =>{
    return(
        <div className='filter mt-4 mb-1 col-12 col-sm-11 col-md-9 col-lg-6 col-xl-5'>
            <h6 className="mr-2"> Count: {props.count} </h6>
            <button type="button" className="btn btn-white mr-2 mb-1" onClick={props.all} > All </button>
            <button type="button" className="btn btn-white mr-2 mb-1" onClick={props.active} > Active </button>
            <button type="button" className="btn btn-white mr-2 mb-1" onClick={props.completed} > Completed </button>
            <button type="button" className="btn btn-white mb-1" onClick={props.clearCompleted} > Clear Completed </button>
        </div>
    )
}

export default FilterTab