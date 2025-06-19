import React from 'react'
import ButtonItem from '../Button/ButtonItem'
import'./BackButton.css'
function BackButton() {
  return (
    <>
    <ButtonItem 
    img='/assets/img/BackButton.png'
    btnText=""
    to={`/dashboard/items/`}
    className="bg-white me-0  rounded-circle d-flex justify-content-center align-items-center text-decoration-none BackButton text-white"
                    />
    </>
  )
}

export default BackButton