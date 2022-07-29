import { Session, User } from '@supabase/supabase-js'
import React, { createContext, useEffect, useState } from 'react'
import { sb, sbClient } from './sb'

/**
 * Interfaces & Types
 */
export interface AuthState {
    session: Session | null
    user: User | null
}

type Props = {
    children: any
}
/**
 * AuthContext and default value for authState
 */
const authDefault: AuthState = {session: null, user: null}
export const AuthContext = createContext(authDefault)
/**
 * @function AuthRequired 
 * Provides authContext for children to consume
 */
function AuthRequired({children}: Props) {
    const [authState, setAuthState] = useState<AuthState>(authDefault)
    
    /**
     * Get session info from supabase
     * if session exists, set session and user info in state.
     */
    useEffect(() => {
        const session = sbClient.auth.session()
        setAuthState({ session, user: session?.user ?? null })
      }, [])

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}

export default AuthRequired