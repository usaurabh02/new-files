import React from 'react'
import Image from "next/image";
import Logo from "../public/logo-vam.png";

export function Overlay() {
    return (
      <>
      <div style={{ position: 'absolute', top: 10, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <div className='class' style={{position: 'absolute'}}>
        <Image src={Logo} alt="/" width={200} height={200}/>
        </div>
        </div>
      </>
      );
};

export default Overlay;
