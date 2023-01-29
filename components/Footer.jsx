import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa';
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'



export const Footer = () => {
  return (
    <div class="new_footer_area">
        <div class="new_footer_top">
        <div className='mx-auto py-3 grid lg:grid-cols-2 gap-8 text-black '>
        <span>
        <p className='text-size-[10px]'> Do you want to be a partner or want to scale your AR business across 
          India.</p>
          <p>Drop a mail at <span className='text-[#00df9a] '><a href="mailto:partner@vamverse.com">partner@vamverse.com</a></span></p>
          </span>
            <div className=''>
                <h3 class="f-title f_600 t_color f_size_18">Social Media</h3>
                <div className='py-2 text-sm cursor-pointer flex flex-wrap gap-10'>
                    <a href="https://www.facebook.com/people/Vamverse/100086556952988/" target="_blank" rel="noreferrer"><FaFacebookSquare size={40} /></a>
                    <a href="https://www.instagram.com/vamverse" target="_blank" rel="noreferrer"><FaInstagram size={40} /></a>
                    <a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"><FaTwitterSquare size={40} /></a>
                    <a href="https://www.youtube.com/channel/UCULWXOwErviOPCbfaoOqd7w" target="_blank" rel="noreferrer"><AiOutlineYoutube size={40} /></a>
                </div>
                    </div>
                    <div class="footer_bg">
                        <div class="footer_bg_one"></div>
                        <div class="footer_bg_two"></div>
                    </div>
            </div>
        </div>    
        <div class="footer_bottom" className='text-center col-span-2'>             
            <p >© Uprising Tradex LLP. 2022 All rights reserved.</p>
            <p className='flex '>Made with in <AiFillHeart size={20} />Vamverse LLP</p>           
        </div>
    </div>
  )
}

export default Footer;