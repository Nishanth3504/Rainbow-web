import React from 'react'
import '../pages/Login.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useFormik} from 'formik';
import {LoginValidation} from "../pages/LoginValidation";
import { useNavigate } from "react-router-dom";


const initialValues1 = {
  mobilenumber: ""
}
function Login() {
    const navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues1,
        validationSchema: LoginValidation,
        onSubmit: (values) => {
            console.log(values)
            navigate('/verify')
            // navigate('/about')
        }
    })
    
  return (
    <div class="vid-container">
  <video class="bgvid" autoplay="autoplay" muted="muted" preload="auto" loop>
      <source src="https://d2sn5i18drfi94.cloudfront.net/videos_banners/homepage.mp4" />
  </video>
  
          <Container>
              <Row className='row justify-content-center'>
                  <Col md={8} lg={6}>
                      <div class="inner-container">
                          <div class="box">
                              <h1>Login</h1>
                              <p className='text-start mb-1 text-white'>Let's get started! Enter your mobile number</p>
                              <form onSubmit={handleSubmit}>
                                  <div className='position-relative'>
                                      <span className="country-code">+91</span>
                                         {/* <input type="text" name='mobilenumber' maxLength={10} placeholder='Enter mobile number'
                                          value={values.name}
                                          onBlur={handleBlur}
                                          onChange={handleChange} />                 */}
                                          <input
                                        type="text"
                                        name="mobilenumber"
                                        maxLength={10}
                                        placeholder="Enter mobile number"
                                        value={values.mobilenumber}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        onKeyPress={(e) => {
                                            const key = e.key;
                                            // Allow only digits (0-9)
                                            if (!/^[0-9]$/.test(key)) {
                                            e.preventDefault();
                                            }
                                        }}
                                        />

                                      {errors.mobilenumber && <small className="text-error">{errors.mobilenumber}</small>}

                                      <button type="submit" className='w-100'>Continue</button>
                                  </div>
                              </form>
                              <p className='text-center'><Link className='text-white text-decoration-none'>Trouble signing in?</Link></p>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>
</div>
   
  )
}

export default Login
