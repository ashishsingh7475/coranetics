import React from 'react'
import '../App.css';
import logo from '../logo.svg';




export default function Home() {
  return (
    <div className="home-container">
      <div className="container" id="home-box">
        <div>
        <img src={logo} alt="logo" id="logo"/>
        <h1>HERE TO CONNECT</h1><p></p>
        <h3 className="home-moto">UTANGLE THE WEB WITH US</h3>       
        <button className="home-contact"><h4>CONNECT HERE</h4></button>
        </div>


        <div id="part2">
        </div>

     
      </div>
     <div className="container"><h2 className="Home-service-headline">OUR SERVICES </h2></div>
     <div className="container" id="cards">
        <div className="card">
        <img src={require('../images/homeBg.jpg')}alt="Description" className="card-img"/>
        <div className="card-content">
        <h2>Internet Portfolio</h2>
        <a href="1" className="btn">Find Out More</a>
        </div>
        </div>

        <div className="card">
        <img src={require('../images/ecom.jpg')}alt="Description" className="card-img"/>
        <div className="card-content">
        <h2>E-commerce</h2>
        <a href="1" className="btn">Find Out More</a>
        </div>
        </div>

        <div className="card">
        <img src={require('../images/itserv.png')}alt="Description" className="card-img"/>
        <div className="card-content">
        <h2>IT services</h2>
        <a href="1" className="btn">Find Out More</a>
        </div>
        </div>
     </div> 

     <div className="container" id="Home-plans">
      <div><h2 className="Home-plan-headline">OUR PLANS</h2>
      <div className="card-plan">
        <img src={require('../images/macbook.jpg')}alt="Description" className="plan-img"/>
        </div>
      </div>
      <div className="Home-plans">
        <div className="plan-list">
        <h4 className="pink-line">BASIC PLAN</h4>
        <p>Get a custom domain, and a website tailored to your needs.A​t an extremely affordable price.</p>
        </div>
        <div className="plan-list">
        <h4 className="pink-line">PREMIUM PLAN</h4>
        <p>Get everything on the basic plan, website analytics and a ​dashboard​ to view your sites traffic.</p>
        </div>
        <div className="plan-list">
        <h4 className="pink-line">GROUP PLAN +​ SUBSCRIPTION</h4>
        <p>Get 24x7 technical assistance for all your technical difficulties. ​Cora​netics will solve all your problems in one place.</p>
        </div>
        <button className="home-contact"><h4>COMPARE PLANS</h4></button>
      </div>
      </div>   

      <div className="container">
      <h2 className="Home-plan-headline">BUNDLES</h2>  
      <div className="Home-bundles">

        <div>
        <div className="card" style={{width:'20vw'}}>
        <img src={require('../images/stater.gif')}alt="Description" className="card-img"/>
        </div>
        <h4 className="bundle-moto">FOR THOSE GETTING STARTED</h4>
        <h2 className="pink-line">Starter Package</h2>
        <h4>$6</h4>
        </div>

        <div>
        <div className="card" style={{width:'20vw'}}>
        <img src={require('../images/family.jpeg')}alt="Description" className="card-img"/>
        </div>
        <h4 className="bundle-moto">TAILORED PLANS FOR ​YOUR CORPORATION</h4>
        <h2 className="pink-line">Family Package</h2>
        <h4>$10</h4>
        </div>
       

        <div>
        <div className="card" style={{width:'20vw'}}>
        <img src={require('../images/familysub.png')}alt="Description" className="card-img"/>
        </div>
        <h4 className="bundle-moto">FOR THOSE IN TEAMS</h4>
        <h2 className="pink-line">Corporate Package</h2>
        <h4 >$20</h4>
        </div>
       
      </div>

      <div className="accessories">
        <div><h2 className="Home-plan-headline">ACCESSORIES</h2></div>
        <div className="Home-accessories">
          <div>

          <div className="card" style={{width:'30vw'}}>
        <img src={require('../images/router.png')}alt="Description" className="card-img"/>
        </div>
        <h4 className="bundle-moto"> </h4>
        <h2 className="pink-line">Router Setup</h2>
        <h4>$10</h4>

          </div>

          <div>

          <div className="card" style={{width:'30vw'}}>
        <img src={require('../images/network.jpg')}alt="Description" className="card-img"/>
        </div>
        <h4 className="bundle-moto"> </h4>
        <h2 className="pink-line">Network Extender</h2>
        <h4>$10</h4>


          </div>
        </div>
      </div>

      </div>
      <div className="Home-faq">
      <div className="container">
      <div><h2 className="Home-plan-headline" style={{paddingTop:'10vh', fontSize:'7vh'}}>FAQS</h2></div>
      <div className="faq-flex">
        <div>
          <h4><b>How will I know which internet plan is suitable for me?</b></h4>
          <p className="faq-sol">Choose an internet plan based on your usage (streaming, gaming, work), number of users, and required speed. For heavy usage, opt for 50+ Mbps with unlimited data and reliable service.</p>
        </div>
       
        <div>
          <h4><b>Is customer service available 24/7?</b></h4>
          <p className="faq-sol">Yes, customer service is available 24/7 on business days. We're always here to assist you with any queries or issues, ensuring a seamless and supportive experience.</p>
        </div>
       
        <div>
          <h4><b>Why Coranetics ?</b></h4>
          <p className="faq-sol">Choose us for your web design needs because we deliver modern, user-friendly, and responsive websites tailored to your business, with a focus on client satisfaction, creativity, and timely delivery.</p>
        </div>
       
      </div>

      </div>
      </div>
     </div>

        
  )
}
