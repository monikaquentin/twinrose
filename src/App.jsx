import LandingPage from '@/pages/LandingPage'
import SignIn from '@/pages/SignIn'
import NotFound from '@/pages/NotFound'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Endpoint() {
  return (
    <Routes>
      <Route path="/" name="LandingPage" element={<LandingPage />} />
      <Route path="/sign-in" name="SignIn" element={<SignIn />} />
      <Route path="*" name="NotFound" element={<NotFound />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Endpoint />
    </BrowserRouter>
  )
}
