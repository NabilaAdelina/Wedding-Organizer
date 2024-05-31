import AfterFormReq from "./pages/FormReq/AfterFormReq"
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
import CostPlan from "./pages/Admin/CostPlan/CostPlan"
import RincianAdmin2 from "./pages/Admin/RincianAnggaran/RincianAdmin2"
import RincianAdmin from "./pages/Admin/RincianAnggaran/RincianAdmin"
import FormRA from "./pages/Admin/RincianAnggaran/FormRA"

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
        <Route path="dashboard/costplan" element={<CostPlan />}></Route>
        <Route path="/RA1" element={<RincianAdmin />}></Route>
        <Route path="/RA2" element={<RincianAdmin2 />}></Route>
        <Route path="/FormRA" element={<FormRA />}></Route>
      </Routes>
    </>
  )
}

export default App
