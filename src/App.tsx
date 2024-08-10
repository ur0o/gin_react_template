import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from "./pages/Home.tsx"
import { NotFound } from "./pages/NotFound"

export default function App() {
  return <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
}
