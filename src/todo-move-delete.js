const TodoMoveDelete = (props) => {
    return(
        <div>
            <i class="fas fa-arrow-up icon mr-1" onClick={props.up}></i> 
            <i class="fas fa-arrow-down icon mr-3" onClick={props.down}></i>
            <i class="fas fa-trash icon" onClick={props.delete}></i>  
        </div>
    )
}

export default TodoMoveDelete