import axios from "axios";
import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../component/SideBar/SideBar";
import Open from "../component/open/open";


function Dashe() {
  return (
   <div className="d-flex vh-100 w-100" >
    <Open/>
  <SideBar className="d-none d-md-flex"  />
  <div className="d-flex w-100 vh-100 ">
    <Outlet />
  </div>
</div>

  );
}

export default Dashe;
