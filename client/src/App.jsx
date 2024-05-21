import FormReq from "./pages/FormReq/FormReq"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/SettingProfile/SettingLayout/Profile"
import Setting from "./pages/SettingProfile/SettingLayout/Setting"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/setting' element={<Setting />} />
        <Route path="form" element={<FormReq />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
