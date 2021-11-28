const initialData = {
    list : []
}

const todoreducers = (state=initialData,action) => {
    switch(action.type){
        case "ADD_TODO" :

        const{id,data} = action.payload;
            return {
                ...state,
                list:[...state.list,
                    {
                       id:id,
                       data:data
                    }
            ]

            }
         case "DELETE_TODO" : 

         const newState = state.list.filter((elem)=> elem.id !== action.id)
         return {
                list : newState
         }
            default :
            return state
    }


}

export default todoreducers