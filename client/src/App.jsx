import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import SettingProfile from "./pages/SettingProfile/SettingProfile"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<SettingProfile />}></Route>
      </Routes>
    </>
  )
}

export default App
