import React, { useEffect, useState } from 'react';
import '../pages/Login.css';
import { Container, Row, Col } from 'react-bootstrap'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

function LoginOtp() {
   //const [otp, setOtp] = useState('');
const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();


  // useEffect(()=>{
  //   console.log('otp value', otp)
  // },[otp]);

  const handleSubmit = () => {
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      setSuccess('');
    } else {
      setError('');
      setSuccess('OTP is valid! ✅');
      navigate('/registration')
      // Proceed with API call or verification
    }
  };

  return (
     <div class="vid-container">
  <video class="bgvid" autoplay="autoplay" muted="muted" preload="auto" loop>
      <source src="https://d2sn5i18drfi94.cloudfront.net/videos_banners/homepage.mp4" />
  </video>
  
          <Container>
              <Row className='row justify-content-center'>
                  <Col lg={6} md={8}>
                      <div class="inner-container">
                       
              <div class="box">
                <p className='text-start mb-1 otptext text-white'>Enter the 6-digit OTP sent to <br></br>
                  <span>91 98480 63797</span>
                </p>
                <form>
                  <div className='position-relative'>
                    <div className='optBox'>

                       <OtpInput
                        value={otp}
                        inputMode="numeric"
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props}
                        type='number' />}
                      /> 
                    
                    </div>
                    {error && <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>}
                    {success && <p style={{ color: 'green', margin: '10px 0' }}>{success}</p>}
                    <p className='verifyOpt-text'>
                      <span>Didnt't reveive the code? Resend</span>
                      <span>00:25</span>
                    </p>
                    <button className='w-100' type='button' onClick={handleSubmit}>Verify</button>
                  </div>
                </form>
              </div>
                      </div>
                  </Col>
              </Row>
          </Container>
</div>
  )
}

export default LoginOtp
