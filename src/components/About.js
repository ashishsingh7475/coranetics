import React from 'react'
import '../App.css'

export default function About() {
  return (
    <div>
      <div className="container" id="AboutUs">
      <div><h2 className="Home-plan-headline" style={{fontSize:'7vh'}}>About Us</h2>
      <p className="faq-flex">
      Innovation and technology should make life ​simple. That's why, here at Coranetics, we make 
      su​re innovation works for you, your business, and yo​ur people​.<br></br><br></br>
      Our reliable internet connection services enab​le you to enjoy 
      your life more. Our technologi​es improve every day, so you can confidently foc​us on what really matter​s.
      </p>
      <br></br>
      <div className="about-btn-flex">
      <button className="home-contact"><h5>SEE OUR PRODUCTS</h5></button>
      <button className="abtBtn"><h5>GET IN TOUCH</h5></button>

      </div>
      </div>
      <div>
      <div className="card" style={{width:'35vw' , height:'auto'}}>
        <img src={require('../images/aboutCora.jpg')}alt="Description" />
        </div>
      </div>

      </div>
    </div>
  )
}
