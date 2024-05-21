import FormReq from "./pages/FormReq/FormReq"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import SettingProfile from "./pages/SettingProfile/SettingProfile"
import AfterFormReq from "././pages/FormReq/AfterFormReq"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<SettingProfile />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
        <Route path="/Aform" element={<AfterFormReq />}></Route>
      </Routes>
    </>
  )
}

export default App
