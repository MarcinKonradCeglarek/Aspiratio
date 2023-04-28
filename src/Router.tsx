import { FC } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { UserSelector } from './pages'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={UserSelector} />
      </Routes>
    </BrowserRouter>
  )
}
