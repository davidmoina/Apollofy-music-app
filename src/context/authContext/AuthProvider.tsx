import React, { Children, useMemo } from 'react'
import { AuthContext } from './AuthContext';

type Props = {
  children: JSX.Element | JSX.Element[]
}



export const AuthProvider = ({children}: Props) => {
  const dataAuth = useMemo(() => {
    
  }, [])

  return (
    <AuthContext.Provider value={dataAuth}>
      {children}
    </AuthContext.Provider>
  )
}
