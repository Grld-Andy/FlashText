import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/ui/layout/MainLayout'
import Landing from './pages/Landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Landing />} />
      </Route>
    </Routes>
  )
}

export default App
