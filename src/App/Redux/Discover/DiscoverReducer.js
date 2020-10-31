const GET_DISCOVER_WEEK ='GET_DISCOVER_WEEK';

export const getDiscover = songs =>({
    type: GET_DISCOVER_WEEK,
    payload: songs
})
const initialState ={
    discovers: null
} 

const DiscoverReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_DISCOVER_WEEK:
            return{
                ...state,
                discovers: payload
            }
        default: return state
    }

}
export default DiscoverReducer;

