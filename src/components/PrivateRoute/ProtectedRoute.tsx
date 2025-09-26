
import { useAppSelector } from '../Redux/Hooks'
import {  Outlet } from 'react-router-dom'



export const ProtectedRoute = () => {
    const {currentUser} = useAppSelector((state) => state?.authState)
  return currentUser ? <Outlet/> : <Outlet/>
}
