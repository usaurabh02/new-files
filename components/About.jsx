import React from 'react'
import {FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'


export const About = () => {
  return (
    <div className='w-full h-screen'>
    <div className="text-3xl mt-5 italic ">
    <h5 className="text-center py-8 px-4 font-italic mx-auto text-black">
    About Us
    </h5>
  </div>
  <div class='flex flex-wrap gap-4 place-content-center px-2'>
     
    <div class="snip1344"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="profile-sample1" class="background"/><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="profile-sample1" class="profile" />
    <figcaption>
      <h3>SAURABH UPADHYAY<span>Founder & Lead Software Developer</span></h3>
      <div class="icons"><a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"><i class="linkedin"><FaLinkedin size={30} /></i></a><a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"> <i class="twitter"><FaTwitterSquare size={30} /></i></a><a href="mailto:saurabh@vamverse.com" target="_blank" rel="noreferrer"> <i class="email"><SiGmail size={30} /></i></a></div>
    </figcaption>
  </div>



  
  <div class="snip1344"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg" alt="profile-sample7" class="background"/><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg" alt="profile-sample7" class="profile" />
    <figcaption>
      <h3>SIDDHARTH VAISHNAV<span>Founding Member & Lead Software Developer</span></h3>
      <div class="icons"><a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"><i class="linkedin"><FaLinkedin size={30} /></i></a><a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"> <i class="twitter"><FaTwitterSquare size={30} /></i></a><a href="mailto:saurabh@vamverse.com" target="_blank" rel="noreferrer"> <i class="email"><SiGmail size={30} /></i></a></div>
    </figcaption>
  </div>
 

  <div class="snip1344"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="background"/><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
    <figcaption>
      <h3>ASHISH SINGH<span>Founding Member & AR filter Developer</span></h3>
      <div class="icons"><a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"><i class="linkedin"><FaLinkedin size={30} /></i></a><a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"> <i class="twitter"><FaTwitterSquare size={30} /></i></a><a href="mailto:saurabh@vamverse.com" target="_blank" rel="noreferrer"> <i class="email"><SiGmail size={30} /></i></a></div>
    </figcaption>
  </div>

   </div> 
   
   <div className='mt-12 '>
    <p className={"max-w-[1240px] mx-auto text-black font-semibold text-justify px-4"}>Vamverse is a stealth mode start-up, discovering the AR capabilities in retail and online shopping industry with deep learning based solutions. It is located in India’s one of the fastest and cleanest city Surat. It is a subsidiary company of <span className="text-[#00DF9A] font-bold">Uprising Tradex LLP</span>, established in 2022. Vamverse is a augmented reality software services company, providing outsourced WebAR development and managed services. Our outsourcing services cover all phases of WebAR development, integration, deployment, and maintenance. Our current offering includes 3D modelling, website development, and AR filters for brand promotions. We are diverse team of hard-working young developers. Our team has well experienced professionals working in different technologies including Web Development, Machine Learning, Artificial intelligence, UI/UX, AR and much more. We are working together to bring the best e-commerce solutions for organisations to build brand, values and trust with their customers.</p>
     </div>
  </div>
 
  )
}

export default About;


