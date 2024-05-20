import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import UserSetting from "./pages/SettingProfile/UserSetting"
import FormReq from "././pages/FormReq/FormReq"
import PopUp from "././pages/FormReq/FormLayout/PopUp"
import AfterFormReq from "././pages/FormReq/AfterFormReq"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/user/profile" element={<UserSetting />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
        <Route path="/Aform" element={<AfterFormReq />}></Route>
        <Route path="/popup" element={<PopUp />}></Route>
      </Routes>
    </>
  )
}

export default App
