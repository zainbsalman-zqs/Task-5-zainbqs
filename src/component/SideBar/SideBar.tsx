import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LogOut from "../LogOut/LogOut";
import IdUser from "../IdUser/IdUser";
import "./SideBar.css";
import { useEffect, useState } from "react";
import { sidebarData } from "../../Data/SideData";
interface SideBarProps {
  className?: string;
}
function SideBar({ className = "" }: SideBarProps) {
  const { logoSrc, items } = sidebarData;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(items[0].to);
    }
  }, []);
  return (
    <div className={`flex-column sid bg-Linen vh-100 ${className}`}>
      <div className="text-center mb-5">
        <img src={logoSrc} alt="Logo" className="logo" />
        <IdUser />
      </div>
      <nav className="d-flex flex-column flex-grow-1 nav w-100 fw-medium fs-6 lh-1 pb-3">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={`d-flex align-items-center mb-3 px-3 py-2 rounded text-decoration-none ${
              activeIndex === index ? "bg-warning text-dark" : "text-dark"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.icon} alt="" className="me-2" />
            {item.label}
          </NavLink>
        ))}
        <div className="mt-auto">
          <LogOut />
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
