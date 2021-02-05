
const FilterTab = (props) =>{
    return(
        <div className='filter mt-4 mb-1 col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
            <h6 className="mr-2"> {props.count} items </h6>
            <button type="button" className="btn btn-white mr-1 mb-1" onClick={props.all} > All </button>
            <button type="button" className="btn btn-white mr-1 mb-1" onClick={props.active} > Active </button>
            <button type="button" className="btn btn-white mr-1 mb-1" onClick={props.completed} > Done </button>
            <button type="button" className="btn btn-white mb-1" onClick={props.clearCompleted} > Clear Done </button>
        </div>
    )
}

export default FilterTab