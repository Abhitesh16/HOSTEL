import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Notices } from './pages/Notices';
import { Booking } from './pages/Booking';
import { Complaints } from './pages/Complaints';
import { Payments } from './pages/Payments';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Signup } from './pages/Signup';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Admin } from './pages/Admin';
import { ExploreHostel } from './pages/ExploreHostel';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<ExploreHostel />} />
          <Route path="notices" element={<Notices />} />
          <Route path="booking" element={<Booking />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="payments" element={<Payments />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
