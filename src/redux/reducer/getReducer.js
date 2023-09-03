import { GET_FETCHING,GET_FETCHING_SUCCESS,GET_FETCHING_ERROR } from "../actions/actionTypes";

let initialState ={
    loading:false,
    data:[],
    error:null
}
const getReducer = (state=initialState,action)=>{
    
        switch(action.type){
            case GET_FETCHING:
                return {
                  ...state,
                    loading:true
                }
            case GET_FETCHING_SUCCESS:
                return {
                  ...state,
                    loading:false,
                    data:action.payload
                }
            case GET_FETCHING_ERROR:
                return {
                  ...state,
                    loading:false,
                    error:action.payload
                }
            default:
                return state
        }
    
}
export default getReducer