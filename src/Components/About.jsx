import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container py-5 my-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='text-primary fw-bold mb-4'>About Us</h1>
          <p className='lead mb-4'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <Link to="/contact" className='btn btn-outline-primary px-3'>Contact Us</Link>
        </div>
        <div className='col-md-6 d-flex justify-content-center '>
          <img src='/assets/images/about-us.jpg' alt='About Us' height="300px" width="400px" />
        </div>
      </div>

    </div>
  )
}

export default About