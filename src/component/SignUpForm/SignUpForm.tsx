import axios from "axios";
import { FormEvent, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpForm.css";
import { signUpFormProps } from "../../Data/SignUpdata";
import Text from "../Text/Text";
function SignUpForm() {
  const {
    name,
    Labelname1,
    Labelname2,
    Email,
    inputEmail,
    Password,
    inpupassword1,
    inpupassword2,
  } = signUpFormProps;
  const navigate = useNavigate()
  const first_name = useRef<HTMLInputElement>(null);
  const last_name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const password_confirmation = useRef<HTMLInputElement>(null);
  const profile_image = useRef<HTMLInputElement>(null);
  const sendData = (event: FormEvent) => {
      const user_name = `${first_name.current?.value || ""}${last_name.current?.value || ""}`;
    event.preventDefault();
    axios
      .post("https://web-production-3ca4c.up.railway.app/api/register",
        {
          first_name: first_name.current?.value,
          last_name: last_name.current?.value,
          user_name: user_name,
          email: email.current?.value,
          password: password.current?.value,
          password_confirmation: password_confirmation.current?.value,
          profile_image: profile_image.current?.files?.[0],
        }
      ,{
         headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
      })
      .then((res) => {
          const user = res.data.data.user;
  const token = res.data.data.token;
        localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user_name", user.user_name);
  localStorage.setItem("user_image", user.profile_image_url);
       navigate("/dashboard");

      })
  };
  return (
    <Form onSubmit={sendData} className="x bg-white	shadow mx-auto   rounded-4 ">
      <Text
      img="/assets/img/Logo.png"
      par1="Sign Up"
      par2="Fill in the following fields to create an account."
      />
      <Form.Group className="pt-4">
        <Form.Label>{name}</Form.Label>
        <Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Control
               ref={first_name}
                className="z color-form "
                type="text"
                placeholder={Labelname1}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Control
               ref={last_name}
                className="z color-form"
                type="text"
                placeholder={Labelname2}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="pt-3" controlId="formEmail">
        <Form.Label>{Email}</Form.Label>
        <Form.Control
         ref={email}
          className="z color-form"
          type="email"
          placeholder={inputEmail}
          name="email"
        />
      </Form.Group>
      <Form.Group className="pt-3" controlId="formPassword">
        <Form.Label>{Password}</Form.Label>
        <Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Control
               ref={password}
                className="z color-form"
                type="password"
                placeholder={inpupassword1}
                name="password"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Control
              ref={password_confirmation}
                className="z color-form"
                type="password"
                placeholder={inpupassword2}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="pt-3" controlId="formFile">
  <Form.Label>Profile Image</Form.Label>

  <div className="position-relative bord d-flex justify-content-center align-items-center ">
    <input
      type="file"
      id="fileUpload"
      ref={profile_image}
      style={{ display: "none" }}
      className="custom-file-input"
    />

    <label htmlFor="fileUpload" className="">
      <img
        src="/assets/img/Upload icon.png"
        alt="Upload"
        className=" imfil"
      />
    </label>
  </div>
</Form.Group>
      <Button variant="primary" type="submit" className="w-100 btn mt-3 ">   
      Sign Up
      </Button>
      <div className="mt-3 d-flex justify-content-center align-items-center  ">
        <p className="mb-0">Don’t have an account?</p>
        <Link to="/" className="color-linke">
          Sign in
        </Link>
      </div>
    </Form>
  );
}

export default SignUpForm;
