import axios from "axios";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./DeletItem.css";
import ButtonItem from "../Button/ButtonItem";

interface Props {
  id: number;
  onDeleteSuccess: () => void;
}

function DeletItems({ id, onDeleteSuccess }: Props) {
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const deleteItem = () => {
    axios
      .delete(`https://web-production-3ca4c.up.railway.app/api/items/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then(() => {
        handleClose();
        onDeleteSuccess();
      })
      
  };

  const buttons = [
    { text: "No", onClick: handleClose, variant: "secondary" },
    { text: "Yes", onClick: deleteItem, variant: "danger" },
  ];

  return (
    <>
      <ButtonItem
        btnText="Delete"
        onClick={handleShow}
        className="btn bg-Red border-danger text-white  text-decoration-none fw-medium fs-6 lh-1 btn-link"
      />
      <Modal
        show={showDelete}
        className="bg-delet p-0 w-100vh h-100vh d-flex justify-content-center align-items-center"
        onHide={handleClose}
      >
        <Modal.Body className="fontdelet paddelet p-0 color-black">
          Are you sure you want to delete the product?
        </Modal.Body>
        <Modal.Footer className="w-100 d-flex justify-content-between align-items-center">
          {buttons.map((btn, index) => (
            <ButtonItem
              key={index}
              btnText={btn.text}
              onClick={btn.onClick}
              className={`${btn.variant} bg-deletbtn text-white btn-width`}
            />
          ))}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletItems;
