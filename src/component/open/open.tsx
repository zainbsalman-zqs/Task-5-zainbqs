import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from '../SideBar/SideBar';

  function Open() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <Button
        variant="outline-secondary"
        className="d-md-none m-3"
        onClick={handleShow}
      >
        ☰ 
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0 h-100% d-flex align-items-center">
          
          <SideBar className="d-flex p-0" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Open;

