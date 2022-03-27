import React from 'react'

const Register = () => {
  return (
      <div>
          {/* <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#RegisterModal">
              <span className='fa fa-user-plus me-1'></span>  Register
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="RegisterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <div className='text-center'>Sign up with </div>
                          <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                              <button className="btn btn-outline-dark btn-rounded" type="button">
                                  <span className=''>Google</span>
                              </button>
                              <button className="btn btn-outline-dark btn-rounded" type="button">
                                  <span className=''>Facebook</span>
                              </button>
                          </div>
                          
                          {/* <button className='btn btn-primary w-100 mb-2'>
                              <span className='fa fa-facebook me-2'></span>
                              Sign up with Facebook
                          </button> */}
                          <form>
                              <div className="mb-3">
                                  <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                  <input type="text" className="form-control" id="inputFirstName" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                  <input type="text" className="form-control" id="inputLastName"  />
                              </div>
                              
                              <div className="mb-3">
                                  <label htmlFor="inputEmail" className="form-label">Email address</label>
                                  <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                                  <input type="tel" className="form-control" id="inputPhone" aria-describedby="emailHelp" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="inputPassword" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="inputPassword" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                  <input type="password" className="form-control" id="confirmPassword" />
                              </div>
                              <div className="mb-3 form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                              </div>
                              <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                          </form>
                      </div>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Register