import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div onClick={() => navigate('/')}>我的模版</div>
      <div onClick={() => navigate('/settings')}>模版设置</div>
    </div>
  )
}

export default Navbar;