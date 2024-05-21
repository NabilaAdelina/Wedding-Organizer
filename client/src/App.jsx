import FormReq from "./pages/FormReq/FormReq"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import SettingProfile from "./pages/SettingProfile/SettingProfile"
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
        <Route path="aform" element={<AfterFormReq />}></Route>
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/setting' element={<Setting />} />
        <Route path="form" element={<FormReq />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/concept" element={<Concept />}></Route>
        <Route path="/Schedule" element={<Schedule />}></Route>
      </Routes>
    </>
  )
}

export default App
