
const FilterTab = (props) =>{
    return(
        <div className='filter mt-4 mb-1 col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5'>
            <h6 className="mr-2"> {props.count} items </h6>
            <button type="button" className="btn btn-white mr-1 mb-1" onClick={props.all} > All </button>
            <button type="button" className="btn btn-white mr-1 mb-1" onClick={props.active} > Active </button>
            <button type="button" className="btn btn-white mr-1 mb-1" onClick={props.completed} > Done </button>
            <button type="button" className="btn btn-white mb-1" onClick={props.clearCompleted} > Clear Done </button>
        </div>
    )
}

export default FilterTab