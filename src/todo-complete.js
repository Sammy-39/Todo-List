const TodoComplete = (props) => {
    return(
        <div className='mr-1'>
            <i class="fas fa-check mr-3 icon" onClick={props.complete}
            style={props.setStyle? {color: 'green'} : {color:'rgba(128, 128, 128, 0.5)'}}></i> 
        </div>
    )
}

export default TodoComplete