import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../pages/Registration.css';
import {useFormik} from 'formik';
//import * as Yup from 'yup';
import {registration} from "../pages/LoginValidation";
import { useNavigate } from "react-router-dom";



const initialValues1 = {
  name: "",
  title: "",
  lastname: "",
  mobileno: "",
  Country: "",
  datename: "",
  Gender: "",
  address: "",
  pincode: ""
}
function Registration() {
    // const { logout } = useAuth();
 const navigate = useNavigate();
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
            initialValues: initialValues1,
            validationSchema: registration,
            onSubmit: (values) => {
                console.log(values)
                navigate('/verify')
                // navigate('/about')
            }
        })

  return (
    <div>
          <Container>
              <Row>
                  <Col md={12}>
                   <form onSubmit={handleSubmit}>
                      <div className='mainBox form-wrapper'>
                          <h1>Registration</h1>
                          <div className="row">
                              <Col md={4}>
                                  <div className="form-group mb-20">
                                      <label>Title <span className='text-danger'>*</span></label>
                                      <select className="w-100 ht-50 round-5 text-para borderPrimary"
                                       name="title"
                                        value={values.title}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                      >
                                          <option value="">Select title</option>
                                          <option value="1">Mr</option>
                                          <option value="2">Ms</option>
                                      </select>
                                      {errors.title && <small className="text-error">{errors.title}</small>}
                                  </div>
                              </Col>
                              <Col md={4}>
                                  <div className="form-group mb-20">
                                      <label>First Name <span className='text-danger'>*</span></label>
                                      <input type="text" id="" className="w-100 ht-50 round-5 text-para borderPrimary" placeholder="First Name"
                                        name="name"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                      />
                                       {errors.name && <small className="text-error">{errors.name}</small>}
                                  </div>
                              </Col>
                             <Col md={4}>
                                  <div className="form-group mb-20">
                                      <label>Last Name <span className='text-danger'>*</span></label>
                                      <input type="text" id="email_address" className="w-100 ht-50 round-5 text-para borderPrimary" 
                                       name="lastname"
                                        value={values.lastname}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                      placeholder="Last Name" />
                                      {errors.lastname && <small className="text-error">{errors.lastname}</small>}
                                  </div>
                              </Col>
                                 <Col md={4}>
                                  <div className="form-group position-relative mb-25">
                                      <label>Mobile number</label>
                                      <input type="text" id="" className="w-100 ht-50 round-5 text-para borderPrimary" 
                                        name="mobileno"
                                        maxLength={10}
                                        placeholder="Enter mobile number"
                                        value={values.mobileno}
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
                                      
                                          <img src="img/icons/phone-gray.svg" alt="Icoon" />
                                           {errors.mobileno && <small className="text-error">{errors.mobileno}</small>}
                                          </div>
                                  </Col>
                                  <Col md={4}>
                                      <div className="form-group mb-25">
                                          <label>Country</label>
                                          <select className="w-100 ht-50 round-5 text-para borderPrimary"
                                           name="Country"
                                            value={values.Country}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          >
                                            <option value="">Selct Country</option>
                                              <option value="0">India</option>
                                              <option value="1">USA</option>
                                              <option value="2">UK</option>
                                          </select>
                                           {errors.Country && <small className="text-error">{errors.Country}</small>}
                                      </div>
                                  </Col>

                                   <Col md={2} >
                                      <div className="form-group mb-20">
                                          <label>Date of Birth</label>
                                          <input type="date" id="" className="w-100 ht-50 round-5 text-para borderPrimary" 
                                          name="datename"
                                            value={values.datename}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          />{errors.datename && <small className="text-error">{errors.datename}</small>}
                                      </div>
                                  </Col>

                                  <Col md={2} >
                                      <div className="form-group mb-20">
                                          <label>Gender</label>
                                          <select className="w-100 ht-50 round-5 text-para borderPrimary"
                                           name="Gender"
                                        value={values.Gender}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                          >
                                            <option value="">Select Gender</option>
                                              <option value="0">Male</option>
                                              <option value="1">Female</option>
                                          </select>
                                          {errors.Gender && <small className="text-error">{errors.Gender}</small>}
                                      </div>
                                  </Col>
                                  <Col md={8} >
                                      <div className="form-group mb-20">
                                          <label>Address</label>
                                          <input type="text" id="" className="w-100 ht-50 round-5 text-para borderPrimary" placeholder="Enter Address"
                                         name="addressname"
                                        value={values.addressname}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                          />
                                           {errors.addressname && <small className="text-error">{errors.addressname}</small>}
                                      </div>
                                  </Col>
                                  <Col md={4}>
                                      <div className="form-group mb-20">
                                          <label>Pincode</label>
                                          <input type="number" id="" className="w-100 ht-50 round-5 text-para borderPrimary" placeholder="Pin Code"
                                           name="pincode"
                                        maxLength={6}
                                        value={values.pincode}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                          />
                                          {errors.pincode && <small className="text-error">{errors.pincode}</small>}
                                      </div>
                                  </Col>
                                  {/* <div className="col-12">
                                    <div className="form-check checkbox style-two mb-25">
                                        <input name="gridCheck" value="I agree to the terms and privacy policy." className="form-check-input" type="checkbox" id="gridCheck" required="" />
                                        <label className="form-check-label" for="gridCheck">
                                            I accept <a href="privacy-policy.html" className="text_primary link-hover-primary">Privacy Policy</a> and <a href="terms-conditions.html" className="text_primary link-hover-primary">Terms &amp; Conditions</a>
                                        </label>
                                        <div className="help-block with-errors gridCheck-error"></div>
                                    </div>
                                </div> */}
                            </div>
                            <Row className=" justify-content-center">
                                    <div className="col-md-3">
                                        <button type="submit" className="btn style-one w-100 d-block font-secondary fw-bold position-relative z-1 round-5">
                                            <span>Register Now
                                                <img src="img/icons/right-arrow-white.svg" alt="Icon" className="transition icon-left" />
                                            </span>
                                            <img src="img/icons/right-arrow-white.svg" alt="Icon" className="transition icon-right" />
                                        </button>
                                    </div>
                                </Row>
                          </div>
                          </form>
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default Registration
