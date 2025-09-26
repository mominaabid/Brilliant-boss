
import { useAppSelector } from '../Redux/Hooks'
import { Navigate, Outlet } from 'react-router-dom'



export const ProtectedRoute = () => {
    const {currentUser} = useAppSelector((state) => state?.authState)
  return currentUser ? <Outlet/> : <Navigate to={"/login"}/>
}
