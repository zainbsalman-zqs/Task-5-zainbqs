import axios from "axios";
import { FormEvent, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import Title from "../Title/Title";
import "./AddItem.css";
import ButtonItem from "../Button/ButtonItem";
function AddItem() {
  const name = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const sendData = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post(
        "https://web-production-3ca4c.up.railway.app/api/items",
        {
          name: name?.current?.value,
          price: price?.current?.value,
          image: image?.current?.files?.[0],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": " multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/dashboard/items");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="padbutt">
      <BackButton />
      <Title Title="ADD NEW ITEM" classname="" />
      <Form
        onSubmit={sendData}
        style={{ height: "100vh" }}
        className="d-flex flex-column"
      >
        <div className="d-flex justify-content-between">
          <Form.Group className="me-2 ">
            <Form.Label className="naminput pb-3">Name</Form.Label>
            <Form.Control
              className="form-inp"
              type="text"
              placeholder="Enter the product name"
              ref={name}
              required
            />
            <Form.Label className="naminput padinp pb-3">Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the product price"
              ref={price}
              required
            />
          </Form.Group>
          <Form.Group className="pt-3" controlId="formFile">
            <Form.Label className="naminput">Image</Form.Label>
            <div className="imgedit position-relative bord d-flex justify-content-center align-items-center">
              <input
                type="file"
                id="fileUpload"
                ref={image}
                style={{
                  display: "none",
                }}
                className="custom-file-input"
              />
              <label htmlFor="fileUpload" style={{ cursor: "pointer" }}>
                <img
                  src={"/assets/img/Upload icon.png"}
                  alt="Upload"
                  className=" "
                />
              </label>
            </div>
          </Form.Group>
        </div>
        <div className="mt-3 d-flex justify-content-center align-items-center btn-formco">
          <ButtonItem
            img=""
            btnText="Save"
            type="submit"
            className="btn-primary btn-form"
          />
        </div>
      </Form>
    </div>
  );
}

export default AddItem;
