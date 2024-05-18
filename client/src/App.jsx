import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import UserSetting from "./pages/SettingProfile/UserSetting"
import FormReq from "././pages/FormReq/FormReq"
import RincianAnggaran from "./pages/RincianAnggaran/RincianAnggaran"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/user/profile" element={<UserSetting />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
        <Route path="/rincian" element={<RincianAnggaran />}></Route>
      </Routes>
    </>
  )
}

export default App
