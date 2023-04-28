import { FC } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { UserSelector } from './pages/UserSelector/UserSelector'
import { UserDashboard } from './pages/UserDashboard'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={UserSelector} />
        <Route path="/Dashboard" Component={UserDashboard} />
      </Routes>
    </BrowserRouter>
  )
}
