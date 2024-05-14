import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import UserSetting from "./pages/SettingProfile/UserSetting"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/user/profile" element={<UserSetting />}></Route>
      </Routes>
    </>
  )
}

export default App
