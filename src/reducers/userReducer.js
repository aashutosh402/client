import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants"

export const userReducer = (state ={},action)=>{
    console.log(state.user)

    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
            return{
                loading:true,
                isAuthenticated:false
            }

        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }  

      case LOGIN_FAIL:
     case REGISTER_USER_FAIL:
        return{
          ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
        }

        default:
        return state

    }

}