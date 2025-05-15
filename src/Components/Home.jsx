import React from 'react'
import Products from './Products';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
<>
<div className='hero'>
        <div className="card text-bg-dark ">
        <img src="assets/images/slider-bg.jpg" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className='container'>
         <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
      </div>
     </div>
     <div className="container py-5 maincontent">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center mb-5'>ZEES</h1>
                    </div>
                    <div className="col-md-6 mb-5">
                        <img src="assets/images/banner.jpg" alt="adsf" className='img-fluid' />
                    </div>
                    <div className="col-md-6 my-auto">
                        <h3 className='mb-3'>EXHIBITION CLOSING SOON</h3>
                        <p className='my-5'>
                            The Fondation Cartier pour l’art contemporain and The Shed present the North American debut of The Yanomami Struggle, a comprehensive exhibition dedicated to the collaboration between artist and activist Claudia Andujar and the Yanomami people, one of the largest Indigenous groups living in Amazonia today. On view through April 16, 2023.
                        </p>
                        <Link to='/about' className='primary-btn w-25 ms-0'>Plan your visit</Link>
                    </div>
                </div>
            </div>
</div>
     <Products/>
</>

  )
}

export default Home;