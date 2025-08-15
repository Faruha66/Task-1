import React from 'react'

export default function Portfolio() {
  return (
    <div>
     
      <div id='h2' className='d-flex flex-column'>
         <h2 className='text-center fw-bold h1 py-2'>PORTFOLIO COMPONENT</h2>
         <i class="fa-solid fa-star position-absolute"></i>
      </div>

      <div className="container p-4">
        <div className="row g-5 ">
            <div className="col-md-4 ">
                <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
            </div>
            <div className="col-md-4">
                <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
            </div>
            <div className="col-md-4">
                <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
            </div>
            <div className="col-md-4">
                <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
            </div>
            <div className="col-md-4">
                <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
            </div>
            <div className="col-md-4">
                <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}



