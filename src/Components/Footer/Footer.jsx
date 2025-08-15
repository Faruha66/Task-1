import React from 'react'

export default function Footer() {
  return <>
   <div className='bg-secondary p-5 text-white'>
        <div className="container p-2">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-4 text-center">
                    <h3>
                        Location
                    </h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>

                    <div className="col-md-4 text-center ">
                        <h3>ARPOUND THE WEB</h3>
                       
                            <i class="fa-brands fa-facebook fs-5 p-4 text-center"></i>
                        <i class="fa-brands fa-twitter fs-5 p-4 "></i>
                        <i class="fa-brands fa-linkedin-in fs-5 p-4 "></i>
                        <i class="fa-solid fa-globe fs-5 p-4"></i>
                        
                    </div>

                    <div className="col-md-4 text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
            </div>
        </div>
        
    </div>
  
  <div className='bg-dark  text-white text-center p-3'>
    <p>Copyright © Your Website 2021</p>
  </div>
  </>
}
