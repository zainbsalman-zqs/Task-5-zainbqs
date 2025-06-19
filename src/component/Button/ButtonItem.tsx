import React from 'react';
import { Link } from 'react-router-dom';

interface CustomButtonProps {
  btnText: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  img?:string
    type?: "button" | "submit" | "reset";
}

export default function ButtonItem({ btnText, to, onClick, className = '',img,type}: CustomButtonProps) {
  if (to) {
    return (
      <Link to={to} className={`${className}btn text-decoration-none text-white`}>
        {img && <img src={img} alt="icon" className="me-0" />}
        {btnText}
      </Link>
    );
  }
  return (
    <button onClick={onClick} type={type || "button"} className={`btn ${className}`}>
      {btnText}
    </button>
  );
}
