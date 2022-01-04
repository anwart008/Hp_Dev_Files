const initialState = {}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'LIST':
            return{
                ...state,
                reduxlist: action.payload
            }
        case 'PRICE':
            return{
                ...state,
                reduxprice: action.payload
            }
        default: return state
    }
}

export default reducer