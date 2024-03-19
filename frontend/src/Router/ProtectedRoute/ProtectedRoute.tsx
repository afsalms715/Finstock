import React from 'react'
import { useAuth } from '../../Context/UserContext'
import { Navigate, useLocation} from 'react-router'

type Props = {
    children:React.ReactNode
}

const ProtectedRoute = ({children}: Props) => {
    const {isLogin} =useAuth();
    const location=useLocation()
  return (
    isLogin()?<>{children}</>:<Navigate to="/login" state={{from:location}} replace/>
  )
}

export default ProtectedRoute