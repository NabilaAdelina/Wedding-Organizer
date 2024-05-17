import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </>
  )
}

export default App
