import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Login = lazy(() => import("./auth/Login.tsx"));
const Logout = lazy(() => import("./auth/Logout.tsx"));
const Register = lazy(() => import("./auth/Register.tsx"));
const Home = lazy(() => import("./page/Home"));

const MyRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  )
};

export default MyRoutes;