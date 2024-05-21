import FormReq from "./pages/FormReq/FormReq"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import SettingProfile from "./pages/SettingProfile/SettingProfile"
import Schedule from "./pages/Schedule/Schedule"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<SettingProfile />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
        <Route path="/Schedule" element={<Schedule />}></Route>
      </Routes>
    </>
  )
}

export default App
