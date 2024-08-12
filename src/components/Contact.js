import React from 'react'
import '../App.css'


export default function Contact(props) {
  return (
    <div className="container" id="contact-flex">
      <div className="contact-img">
        <div className="contact-line">
        <img src={require('../images/contact-logo.png')}alt="Description" id="logo-count" />
            <b><p className="contact-txt">CONNECT TO WHAT MATTERS</p></b>
            
        </div>
      </div>
      <div className="contact-details">
        <div className="cont-txt-line">
           <b><p className="cont-detail-txt" style={{color:'#ff69b4'}}>PHONE</p></b>
            <b><p style={{fontSize:'2vh'}}>{props.phno}</p></b>
        </div>
        <div className="cont-txt-line">
            <b><p className="cont-detail-txt" style={{color:'#ff69b4'}}>EMAIL</p></b>
            <b><p style={{fontSize:'2vh'}}>{props.email}</p></b>
        </div>
        <div className="cont-txt-line">
            <b><p className="cont-detail-txt" style={{color:'#ff69b4'}}>SOCIAL</p></b>
            <a href="https://www.instagram.com/coranetics/?utm_source=ig_web_button_share_sheet" style={{fontSize:'3vh', color:'white'}}><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}
