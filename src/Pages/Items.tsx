import React from 'react'
import { Outlet } from 'react-router-dom'


function Items() {
  return (
    <div className="d-flex flex-column vh-100 w-100">
  <div className="flex-grow-1 overflow-auto">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Items;
