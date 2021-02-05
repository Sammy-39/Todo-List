
const actionReducer = (state=[],action) =>{
    console.log('actionReducer')
    switch(action.type){
      case 'Add': 
        return state.concat([{val: action.payload.val, isCompleted: false}])
  
      case 'Save_Edit': 
        return state.map((item,idx)=>idx===action.payload.idx? {...item, val: action.payload.val, isCompleted: false}: item)
  
      case 'Delete': 
        return state.filter((_,idx)=>idx!==action.payload.idx) 
  
      case 'Complete': 
        return state.map((item,idx)=>idx===action.payload.idx?{ ...item, isCompleted: !item.isCompleted}: item )
  
      case 'Clear_Completed': 
        return state.filter((item)=>!item.isCompleted)
  
      case 'Move_Up': {
        if(action.payload.idx===0){ return state }
        else{ return state.map((item,idx)=>(
          idx===action.payload.idx-1 ? state[idx+1] : (idx===action.payload.idx ? state[idx-1] : item)
        ))}
      }
  
      case 'Move_Down': {
        if(action.payload.idx===state.length-1){ return state }
        else{ return state.map((item,idx)=>(
          idx===action.payload.idx+1 ? state[idx-1] : (idx===action.payload.idx ? state[idx+1] : item)
        ))}
      }
  
      default: 
        return state
    }
  }

  export default actionReducer