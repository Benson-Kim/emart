import React from 'react'

const Contact = () => {
  return (
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-12 text-center py-4 my-4'>
          <h1 className=''>Have some question?</h1>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className='col-md 5 d-flex justify-content-center'>
          <img src='/assets/images/contact-us.jpg' alt='Contact Us' height="300px" width="300px" />
        </div>
        <div className='col-md-6'>
          <form>
            <div class="mb-3">
              <label for="userFullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="userFullName" placeholder="John Smith" />
            </div>
            <div class="mb-3">
              <label for="userEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="userEmail" placeholder="johnsmith@gmail.com" />
            </div>
            <div class="mb-3">
              <label for="userMessage" class="form-label">Message</label>
              <textarea class="form-control" id="userMessage" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-outline-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact