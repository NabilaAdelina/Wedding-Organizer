import FormReq from "./pages/FormReq/FormReq"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import SettingProfile from "./pages/SettingProfile/SettingProfile"
import AfterFormReq from "././pages/FormReq/AfterFormReq"
import RincianAnggaran from "./pages/RincianAnggaran/RincianAnggaran"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<SettingProfile />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
        <Route path="/Aform" element={<AfterFormReq />}></Route>
        <Route path="/rincian" element={<RincianAnggaran />}></Route>
      </Routes>
    </>
  )
}

export default App
