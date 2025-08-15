import React from 'react'

export default function Contacct() {
  return <>
  
    <div className='text-center'>
    
    <div id='h4'>
        <h4 className='h1 fw-bold text-center p-4'>CONTACT SECTION</h4>
        <i class="fa-solid fa-star"></i>
    </div>
      
                      <div className="d-flex justify-content-center align-items-center ">
  <div className="form-floating m-4 w-50">
    <input
      type="text"
      className="form-control"
      id="floatingInput"
      placeholder=""
    />
    <label htmlFor="floatingInput">User Name</label>
  </div>
</div>

<div className="d-flex justify-content-center align-items-center ">
  <div className="form-floating m-4 w-50">
    <input
      type="text"
      className="form-control"
      id="floatingInput"
      placeholder=""
    />
    <label htmlFor="floatingInput">User Age</label>
  </div>
</div>

<div className="d-flex justify-content-center align-items-center ">
  <div className="form-floating m-4 w-50">
    <input
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder=""
    />
    <label htmlFor="floatingInput">User Email</label>
  </div>
</div>

<div className="d-flex justify-content-center align-items-center ">
  <div className="form-floating m-4 w-50 ">
    <input
      type="text"
      className="form-control"
      id="floatingInput"
      placeholder=""
    />
    <label htmlFor="floatingInput">User Password</label>
  </div>

</div>

    <button  className="btn btn-success w-25 m-4">
          Send Message
        </button>

    </div>






  
  
  </>
}
