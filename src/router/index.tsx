import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Login = lazy(() => import('@/views/Login/Login'))
const NotFound = lazy(() => import('@/views/Errors/404'))
const NotAuth = lazy(() => import('@/views/Errors/403'))

const router = [
  {
    path: '/',
    element: <div>首页</div>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/403',
    element: <NotAuth />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  }
]
export default createBrowserRouter(router)
