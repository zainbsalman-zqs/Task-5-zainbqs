import axios from 'axios';
import { FormEvent, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignUpForm from '../component/SignUpForm/SignUpForm';

function SignUp() {

  return (
<section className='d-flex justify-content-center align-items-center w-100 vh-100  bg-Auth'>
<SignUpForm/>
</section>
  );
}

export default SignUp;
