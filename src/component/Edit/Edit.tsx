import axios from "axios";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import Title from "../Title/Title";
import ButtonItem from "../Button/ButtonItem";
import "./Edit.css";
interface Item {
  id: number;
  name: string;
  price: string;
  image_url: string;
}
function Edit() {
  const { id } = useParams();
  const name = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLInputElement>(null);
  const [olddata, setOlddata] = useState<Item>();
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>(null);

  const sendData = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post(
        `https://web-production-3ca4c.up.railway.app/api/items/${id}`,
        {
          name: name?.current?.value,
          price: price?.current?.value,
          image: image?.current?.files?.[0] ? image?.current?.files?.[0] : null,
          _method: "PUT",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/dashboard/items");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`https://web-production-3ca4c.up.railway.app/api/items/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setOlddata(res.data);
      });
  }, []);
  return (
    <>
      <BackButton />
      <Title Title="Edit ITEM" classname="" />
      <Form onSubmit={sendData} className="d-flex padform  flex-column">
        <div className="d-flex justify-content-between">
          <Form.Group className="me-2 ">
            <Form.Label className="naminput pb-3">Name</Form.Label>
            <Form.Control
              className="form-inp"
              type="text"
              placeholder="name"
              defaultValue={olddata?.name}
              ref={name}
              required
            />
            <Form.Label className="naminput padinp pb-3">Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="price"
              defaultValue={olddata?.price}
              ref={price}
            />
          </Form.Group>
          <Form.Group className="pt-3" controlId="formFile">
            <Form.Label className="naminput">Image</Form.Label>
            <div className="imgedit position-relative bord d-flex justify-content-center align-items-center">
              <input
                type="file"
                id="fileUpload"
                ref={image}
                onChange={() => {
                  const file = image.current?.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setPreview(url);
                  }
                }}
                style={{
                  display: "none",
                }}
                className="custom-file-input"
              />
              <label htmlFor="fileUpload" style={{ cursor: "pointer" }}>
                <img
                  src={
                    preview ||
                    olddata?.image_url ||
                    "/assets/img/Upload icon.png"
                  }
                  alt="Upload"
                  className="imgedititem "
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
    </>
  );
}

export default Edit;
