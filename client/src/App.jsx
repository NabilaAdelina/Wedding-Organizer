import AfterFormReq from "./pages/FormReq/AfterFormReq"
import RincianAdmin from "./pages/Admin/RincianAnggaran/RincianAdmin"
import FormReq from "./pages/FormReq/FormReq"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import RincianAnggaran from "./pages/RincianAnggaran/RincianAnggaran"
import Concept from "./pages/Concept/Concept"
import Schedule from "./pages/Schedule/Schedule"
import Profile from "./pages/SettingProfile/SettingLayout/Profile"
import Setting from "./pages/SettingProfile/SettingLayout/Setting"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
        <Route path="/costplan" element={<RincianAnggaran />}></Route>
        <Route path="aform" element={<AfterFormReq />}></Route>
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/setting' element={<Setting />} />
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/concept" element={<Concept />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/rincianAdmin" element={<RincianAdmin />}></Route>
      </Routes>
    </>
  )
}

export default App
