import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useRef, useState } from 'react';
import axios from 'axios';
import Text from "../Text/Text";
interface Errors {
  email?: Array<string>;
  password?: Array<string>;
}
function SignInForm() {
  const navigate = useNavigate()
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const sendData = (event: FormEvent) => {
    event.preventDefault()
    axios.post("https://web-production-3ca4c.up.railway.app/api/login", {
      email: email.current?.value,
      password: password.current?.value,
    }, {
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => {
        localStorage.setItem("token", res.data.token)
        navigate("/dashboard")
      })
      .catch(err => {
        setErrors(err.response.data.errors);
      })

  }
  return (
    <Form onSubmit={sendData} className="x bg-white	shadow mx-auto  rounded-4">
      <Text
        img="/assets/img/Logo.png"
        par1="Sign In"
        par2="Enter your credentials to access your account"
      />
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" ref={email} required />
        {errors?.email && <p>{errors.email[0]}</p>}
      </Form.Group>
      <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" ref={password} />
        {errors?.password && <p className='text-danger mt-1 small'>{errors.password[0]}</p>}
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100 btn mt-3 ">
        SIGN IN
      </Button>
      <div className='mt-3 d-flex justify-content-center align-items-center '><p className='mb-0'>Don’t have an account?</p>
        <Link to="/singup" className='color-linke'>Create one</Link>
      </div>
    </Form>
  )
}
export default SignInForm