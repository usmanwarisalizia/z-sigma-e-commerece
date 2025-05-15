import React from 'react'
import { Link } from 'react-router-dom'

const Contactus = () => {
  return (
    <>
      <div className="container contact my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Contact US</h1>
            
          </div>
          <div className="col-lg-5 d-flex align-items-stretch my-5">
            <div className="info">
              <div className="address">
                <i className="fa fa-map-marker"></i>
                <h4>Location:</h4>
                <p>A1 Johar Town, Lahore, Punjab 57000</p>
              </div>

              <div className="email">
                <i className="fa fa-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="fa fa-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.338402741112!2d74.27696225!3d31.464583700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1680762136676!5m2!1sen!2s"
                frameBorder="0"
                style={{ border: '0', width: '100%', height: '290px' }}
                allowFullScreen=""></iframe>
            </div>

          </div>
          <div className="col-lg-7 d-flex align-items-stretch my-5">
            <form className="email_form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required="" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required="" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required="" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required=""></textarea>
              </div>
              <Link type="submit" className='primary-btn w-50'>Send Message</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus