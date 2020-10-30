import { USER_SIGN_IN, USER_SIGN_OUT} from './AuthType'



const initialState ={
    isAuthenticated: false,
    currentUser: null
}

const authReducer = (state =initialState, {type, payload})=>{
    switch(type){
        case USER_SIGN_IN:
            return{
                ...state,
                isAuthenticated: true,
                currentUser: {
                    // photoURL :payload.photoURL,
                    id: payload.id,
                    displayName: payload.display_name,
                    // email: payload.email,
                },
            }
        case USER_SIGN_OUT:
            return{
                ...state,
                isAuthenticated: false,
                currentUser: null
            }
        default:
            return state
    }
}
export default authReducer;