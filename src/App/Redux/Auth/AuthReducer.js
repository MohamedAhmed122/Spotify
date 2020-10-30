import { USER_SIGN_IN, USER_SIGN_OUT} from './AuthType'



const initialState ={
    isAuthenticated: true,
    currentUser: {
        photoURL: '',
        displayName: 'Mohamed Ahmed',
        uid: 11111,
        email: 'a7a@a7a.com'
    }
}

const authReducer = (state =initialState, {type, payload})=>{
    switch(type){
        case USER_SIGN_IN:
            return{
                ...state,
                isAuthenticated: true,
                currentUser: {
                    photoURL :payload.photoURL,
                    uid: payload.uid,
                    displayName: payload.displayName,
                    email: payload.email,
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