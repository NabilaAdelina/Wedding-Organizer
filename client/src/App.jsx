import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import UserSetting from "./pages/SettingProfile/UserSetting"
import FormReq from "././pages/FormReq/FormReq"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/user/profile" element={<UserSetting />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
      </Routes>
    </>
  )
}

export default App
