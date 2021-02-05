import { useEffect, useState } from "react"
import { connect } from "react-redux"

import AddToDoForm from "./add-todo-form"
import FilterTab from './filter-tab'
import SearchTodoForm from "./search-todo-form"
import TodoComplete from "./todo-complete"
import TodoMoveDelete from "./todo-move-delete"
import './app.css'


const App = ({todos, dispatch}) =>{

    const [val,setVal] = useState('')
    const [searchVal, setSearchVal] = useState('')
    const [edit, setEdit] = useState(-1)
    const [editVal, setEditVal] = useState('')

    const handleAddTodo = (e) =>{
        e.preventDefault()
        if(val && val!==" "){
            dispatch({
                type: 'Add', 
                payload: {val}
            })
        }
        setVal('')
        setEdit(-1)
    }

    const handleSearchTodo = (e) =>{
        setSearchVal(e.target.value)
    }

    useEffect(()=>{
        dispatch({
            type: 'Change_Filter',
            payload: {filter: "Search", val: searchVal}
        })

        // eslint-disable-next-line
    },[searchVal])

    const handleDeleteTodo = (idx) => {
        dispatch({
            type: 'Delete', 
            payload: {idx} 
        })
    }

    const handleEditTodo = (idx,val) =>{
        setEdit(idx)
        setEditVal(val)
    }

    const handleSaveEdit = (e,idx) =>{
        e.preventDefault()
        if(editVal && editVal!==" " && editVal!==todos[idx].val){
            dispatch({
                type: 'Save_Edit', 
                payload: {val: editVal, idx}
            })
        }
        setEdit(-1)
    }

    const handleEditBlur = () =>{
        setEdit(-1)
    }

    const handleCompleteTodo = (idx)=>{
        dispatch({
            type: 'Complete', 
            payload: {idx} 
        })
    }

    const handleShowAll = () =>{
        dispatch({
            type: 'Change_Filter', 
            payload: {filter: "All"} 
        })
    }

    const handleShowActive = () =>{
        dispatch({
            type: 'Change_Filter', 
            payload: {filter: "Active"} 
        })
    }

    const handleShowCompleted = () =>{
        dispatch({
            type: 'Change_Filter', 
            payload: {filter: "Completed"} 
        })
    }

    const handleClearCompleted = () =>{
        dispatch({
            type: 'Clear_Completed'
        })
    }

    const moveTodoUp = (idx) =>{
        dispatch({
            type: 'Move_Up',
            payload: {idx}
        })
    }

    const moveTodoDown = (idx) =>{
        dispatch({
            type: 'Move_Down',
            payload: {idx}
        })
    }

    return(
        <div className='container my-5 app'>
            <AddToDoForm value={val} 
                change={(e)=>setVal(e.target.value)} 
                addTodo={(e)=>handleAddTodo(e)} />
                
            <FilterTab count={todos.length} 
                all={handleShowAll} 
                active={handleShowActive} 
                completed={handleShowCompleted}
                clearCompleted={handleClearCompleted} />             

            {todos.map((item,idx)=>(
                <div key={idx} className='mt-4 todo-item col-sm-10 col-md-8 col-lg-6 col-xl-5'>
                    <div className='todo'>
                        <TodoComplete complete={()=>handleCompleteTodo(idx)} 
                            setStyle={item.isCompleted} />
                        
                        { idx!==edit &&
                          <h5 onDoubleClick={()=>handleEditTodo(idx,item.val)}
                          className={item.isCompleted? 'completed item' : 'active item'}>
                                {item.val} 
                          </h5>
                        }
                        {idx===edit &&
                          <form onSubmit={(e)=>handleSaveEdit(e,idx)}>
                                <input type="text" autoFocus value={editVal} className='form-control'
                                onBlur={handleEditBlur} onChange={(e)=>setEditVal(e.target.value)}/ >
                          </form>
                        }
                    </div>

                    <TodoMoveDelete up={()=>moveTodoUp(idx)}
                        down={()=>moveTodoDown(idx)}
                        delete={()=>handleDeleteTodo(idx)} />  
                </div>
                ))}

            <SearchTodoForm value={searchVal} 
                change={(e)=>handleSearchTodo(e)} />

        </div>
    )
}

const mapStateToProps = (state) =>{
    switch(state.filters.filter){
       case 'All': return {todos:state.actions}
       case 'Active': return {todos: state.actions.filter((item)=>!item.isCompleted)}
       case 'Completed': return {todos: state.actions.filter((item)=>item.isCompleted)}
       case 'Search': return {todos: state.actions.filter((item)=>item.val.indexOf(state.filters.val)!==-1)}
       default:  return {todos:state.actions}
    }   
}

const mapDispatchToProps = (dispatch) =>{
    return {dispatch}
}

const NewApp = connect(mapStateToProps, mapDispatchToProps)(App) 

export default NewApp
