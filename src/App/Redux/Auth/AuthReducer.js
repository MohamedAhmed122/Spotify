import { USER_SIGN_IN, USER_SIGN_OUT} from './AuthType'



const initialState ={
    isAuthenticate: false,
    currentUser: null
}

const authReducer = (state =initialState, {type, payload})=>{
    switch(type){
        case USER_SIGN_IN:
            return{
                ...state,
                isAuthenticate: true,
                currentUser: payload,
            }
        case USER_SIGN_OUT:
            return{
                ...state,
                isAuthenticate: false,
                currentUser: null
            }
        default:
            return state
    }
}
export default authReducer;