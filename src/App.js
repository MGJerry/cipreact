import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TestPage from "./pages/TestPage";
import HomePage from "./pages/HomePage";
import Company from "./pages/Company";
import CrossAndUpSale from "./pages/CrossAndUpSale";
import Segmentation from "./pages/Segmentation";
import NextBestOffer from "./pages/NextBestOffer";
import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import Projects from "./pages/Projects";
// import NewProject from "./pages/NewProject";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Admin from "./pages/Admin";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <Routes>
        {/* Test Page */}
        {/* <Route exact path="/" element={<TestPage />} /> */}

        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/cross-and-up-sale" element={<CrossAndUpSale />} />
        <Route exact path="/segmentation" element={<Segmentation />} />
        <Route exact path="/next-best-offer" element={<NextBestOffer />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* <Route exact path="/blog" element={<Blog />} /> */}

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/reset-password/new" element={<NewPassword />} />
        
        <Route exact path="/projects" element={<Projects />} />
        {/* <Route exact path="/projects/new" element={<NewProject />} /> */}
        <Route exact path="/report" element={<Report />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
