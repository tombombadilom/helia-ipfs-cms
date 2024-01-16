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
const About = lazy(() => import("./page/About"));
const ImagesUpload = lazy(() => import("./lib/ImagesUpload.tsx"));
import Swirl from './lib/Swirl';

const MyRoutes = () => {
  
  return (
    <Router>
      <Swirl />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Upload" element={<ImagesUpload />} />
          <Route path="*" element={<div> Page not found </div> } />
        </Routes>
      </Layout>
    </Router>
  )
};

export default MyRoutes;