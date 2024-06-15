import React, { useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AfterFormReq from "./pages/FormReq/AfterFormReq";
import FormReq from "./pages/FormReq/FormReq";
import LandingPage from "./pages/LandingPage/LandingPage";
import RincianAnggaran from "./pages/RincianAnggaran/RincianAnggaran";
import Concept from "./pages/Concept/Concept";
import Schedule from "./pages/Schedule/Schedule";
import ScheduleAdmin from "./pages/ScheduleAdmin/ScheduleAdmin";
import Dashboard from "./pages/DashboardAdmin/Dashboard";
import Profile from "./pages/SettingProfile/SettingLayout/Profile";
import Setting from "./pages/SettingProfile/SettingLayout/Setting";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import RincianAdmin2 from "./pages/Admin/RincianAnggaran/RincianAdmin2";
import RincianAdmin from "./pages/Admin/RincianAnggaran/RincianAdmin";
import AdminProfile from "./pages/Admin/AdminSetting/AdminProfile";
import AdminSetting from "./pages/Admin/AdminSetting/AdminSetting";
import FormA1 from "./pages/Admin/FormAdmin/FormA1";
import FormA2 from "./pages/Admin/FormAdmin/FormA2";
import EditProfile from "./pages/SettingProfile/SettingLayout/EditProfile";
import AdminEditProfile from "./pages/Admin/AdminSetting/AdminEditProfile";
import { AuthContext } from './hooks/AuthContext';

function App() {
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(atob(token.split('.')[1])) : null; // Decode token to get user data

  user && console.log(user.role)

  const navigate = useNavigate()

  const { isLogin } = useContext(AuthContext);

  return (
    <Routes>
      {!user && !isLogin && (
        <>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
        </>
      )}

      {/* User Routes */}
      {user && user.role === 'user' && (
        <>
          <Route path="/form" element={<FormReq />} />
          <Route path="/costplan" element={<RincianAnggaran />} />
          <Route path="aform" element={<AfterFormReq />} />
          <Route path='user/profile' element={<Profile />} />
          <Route path='user/setting' element={<Setting />} />
          <Route path='user/profile/edit' element={<EditProfile />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/" element={<LandingPage />} />
        </>
      )}

      {/* Admin Routes */}
      {user && user.role === 'admin' && (
        <>
          <Route path="/RA1" element={<RincianAdmin />} />
          <Route path="/RA2" element={<RincianAdmin2 />} />
          <Route path="/fa1" element={<FormA1 />} />
          <Route path="/fa2" element={<FormA2 />} />
          <Route path='admin/profile' element={<AdminProfile />} />
          <Route path='admin/setting' element={<AdminSetting />} />
          <Route path='admin/profile/edit' element={<AdminEditProfile />} />
          <Route path="/dashboard/concept" element={<Dashboard />} />
          <Route path="/dashboard/schedule" element={<ScheduleAdmin />} />
        </>
      )}

      {/* Redirect to home if no user or invalid token */}
      {!user && useEffect(() => { navigate('/') }, [])}
    </Routes>
  );
}

export default App;
