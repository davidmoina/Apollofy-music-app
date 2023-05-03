import { Children, useMemo, useReducer } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext';

type Props = {
  children: JSX.Element | JSX.Element[]
}

export interface Values {
  password?: string,
  email?: string,
  isAuthenticated?: boolean,
  error?: string,
  id?: string,
  token?: string,
}

enum ACTIONS {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
  LOGOUT = "LOGOUT",
  UPDATE_PASSWORD = "UPDATE_PASSWORD"
}

interface LoginActions {
  type: ACTIONS;
  payload?: Values;
}

const initialValue = {
  password: "",
  email: "",
  id: "",
  token: "",
  isAuthenticated: false,
  error: "",
}

const reducer = (state: Values, action: LoginActions): Values => {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCCESS:
      return {
        email: action.payload?.email,
        password: "",
        id: action.payload?.id,
        token: action.payload?.token,
        isAuthenticated: true,
        error: ""
      }
    case ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload?.error
      };
    case ACTIONS.LOGOUT:
      return initialValue;

    case ACTIONS.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload?.password
      };
  
    default:
      return state
  }
}

export const AuthProvider = ({children}: Props) => {

  const [ authState, dispatch ] = useReducer(reducer, initialValue);

  const loginSuccess = (email: string, id: string, token: string): void => {
    dispatch({
      type: ACTIONS.LOGIN_SUCCESS,
      payload: {
        email,
        token, 
        id,
      }
    })
    toast.success("Logged successfully ", {icon: "🙌" })
  }

  const loginError = (error: string):void => {
    dispatch({
      type: ACTIONS.LOGIN_ERROR,
      payload: {
        error
      }
    })
    toast.error("Invalid credentials")
  }

  const logout = (): void => {
    dispatch({
      type: ACTIONS.LOGOUT
    })
    toast.info("Logged out, we will miss you", {icon: "😢"})
  }

  const updatePassword = (password: string): void => {
    dispatch({
      type: ACTIONS.UPDATE_PASSWORD
    })
  }

  return (
    <AuthContext.Provider value={{loginSuccess, loginError, logout, authState}}>
      {children}
    </AuthContext.Provider>
  )
}
