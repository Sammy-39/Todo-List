
const filterReducer = (state='All', action) =>{
    console.log("filterReducer")
    switch(action.type){
      case "Change_Filter": 
        return action.payload
      default: 
        return state
    }
}

export default filterReducer