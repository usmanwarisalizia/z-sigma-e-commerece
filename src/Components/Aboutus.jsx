import React from 'react'

const Aboutus = () => {
    return (
        <>
            <div className='hero'>
                <div className="card bg-dark text-white border-0">
                    <img src='assets/images/aboutbanner.jpg' className='card-img rounded-0' alt='Banner image' style={{ height: "250px", objectFit: "cover" }}></img>
                </div>
            </div>
            <div className='container mb-5 py-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center mb-5'>ZEES</h1>
                    </div>
                    <div className='col-md-6'>
                        <img src='assets/images/slider-bg.jpg' alt='adsf' className='img-fluid' />
                    </div>
                    <div className='col-md-6 my-auto'>
                        <h3 className='mb-3'>EXHIBITION CLOSING SOON</h3>
                        <p className='my-5'>
                            The Fondation Cartier pour l,art contemporain and The Shed present the North American debut of The Yanomami Struggle, a comprehensive exhibition dedicated to the collaboration between artist and activist Claudia Andujar and the Yanomami people, one of the largest Indigenous groups living in Amazonia today. On view through April 16, 2023.
                        </p>
                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default Aboutus